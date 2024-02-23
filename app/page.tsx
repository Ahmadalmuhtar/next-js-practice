"use client";

import Form from "@/components/Form";
import { useEffect, useRef } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <main className="flex justify-center mt-5 space-x-96 w-full max-w-screen-lg">
        <Form />
        <Form focusRef={inputRef} />
        <Form />
        <Form />
      </main>
    </>
  );
}
