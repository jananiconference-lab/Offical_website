"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

import styles from "../styles/Flipbook.module.css";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// PDF Worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
        loading={
          <div className={styles.loading}>
            Loading PDF...
          </div>
        }
      >
        {numPages > 0 && (
          <HTMLFlipBook
  ref={flipBook}
  width={550}
  height={780}
  size="fixed"
  minWidth={320}
  maxWidth={550}
  minHeight={450}
  maxHeight={780}
  showCover
  usePortrait={false}
  mobileScrollSupport
  drawShadow
  flippingTime={700}
  autoSize
  className={styles.book}
>
            {Array.from(
              { length: numPages },
              (_, index) => (
                <FlipPage
                  key={index}
                  className={styles.page}
                >
                  <div className={styles.pageInner}>
                    <Page
                      pageNumber={index + 1}
                      width={bookSize.width - 20}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
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
              )
            )}
          </HTMLFlipBook>
        )}
      </Document>
    </section>
  );
}