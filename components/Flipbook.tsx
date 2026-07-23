"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

import styles from "../styles/Flipbook.module.css";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface FlipbookProps {
  file: string;
}

interface FlipPageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const FlipPage = forwardRef<HTMLDivElement, FlipPageProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

FlipPage.displayName = "FlipPage";

export default function Flipbook({
  file,
}: FlipbookProps) {
  const [numPages, setNumPages] = useState(0);

  const [bookSize, setBookSize] = useState({
    width: 550,
    height: 780,
  });

  const flipBook = useRef<any>(null);

  function onLoadSuccess({
    numPages,
  }: {
    numPages: number;
  }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    function resizeBook() {
      if (window.innerWidth < 768) {
        setBookSize({
          width: 320,
          height: 470,
        });
      } else if (window.innerWidth < 1200) {
        setBookSize({
          width: 430,
          height: 610,
        });
      } else {
        setBookSize({
          width: 550,
          height: 780,
        });
      }
    }

    resizeBook();

    window.addEventListener(
      "resize",
      resizeBook
    );

    return () =>
      window.removeEventListener(
        "resize",
        resizeBook
      );
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.controls}>
        <button
          onClick={() =>
            flipBook.current?.pageFlip().flipPrev()
          }
        >
          ◀ Previous
        </button>

        <button
          onClick={() =>
            flipBook.current?.pageFlip().flipNext()
          }
        >
          Next ▶
        </button>
      </div>

      <Document
        file={file}
        onLoadSuccess={onLoadSuccess}
        className={styles.document}
        loading={
          <div className={styles.loading}>
            Loading PDF...
          </div>
        }
      >
        {numPages > 0 && (
          <div className={styles.flipbookWrapper}>
            <HTMLFlipBook
              ref={flipBook}
              width={450}
              height={650}
              size="stretch"
              minWidth={280}
              maxWidth={550}
              minHeight={400}
              maxHeight={780}
              maxShadowOpacity={0.5}
              showCover
              mobileScrollSupport
              className={styles.book}
              style={{}}
              startPage={0}
              drawShadow
              flippingTime={700}
              usePortrait={false}
              startZIndex={0}
              autoSize
              clickEventForward
              useMouseEvents
              swipeDistance={30}
              showPageCorners
              disableFlipByClick={false}
            >
              {Array.from({ length: numPages }).map((_, index) => (
                <FlipPage
                  key={index}
                  className={styles.page}
                >
                  <div className={styles.pageInner}>
                    <Page
                      pageNumber={index + 1}
                      width={bookSize.width - 20}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                      loading={
                        <div
                          className={
                            styles.pageLoading
                          }
                        >
                          Loading...
                        </div>
                      }
                    />
                  </div>
                </FlipPage>
              ))}
            </HTMLFlipBook>
          </div>
        )}
      </Document>
    </section>
  );
}