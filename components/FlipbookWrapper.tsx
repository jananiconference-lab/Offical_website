"use client";

import dynamic from "next/dynamic";

const Flipbook = dynamic(() => import("./Flipbook"), {
  ssr: false,
});

interface FlipbookWrapperProps {
  file: string;
}

export default function FlipbookWrapper({
  file,
}: FlipbookWrapperProps) {
  return <Flipbook file={file} />;
}