"use client";

import React, { useState } from "react";

interface ref {
  focusRef?: React.RefObject<HTMLInputElement> | null;
}

function Form({ focusRef }: ref) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue === "give me a secret") {
      alert("One drunk Man is more intellegent then 3 Women With PHDs");
    } else {
      alert("please Type: give me a secret");
    }
    setInputValue("");
  };

  return (
    <div>
      <h2>Basic Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={
            (focusRef as React.MutableRefObject<HTMLInputElement> | null) ||
            focusRef
          }
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Please Type: give me a secret"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
