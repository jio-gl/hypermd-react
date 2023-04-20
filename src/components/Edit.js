import React, { useRef, useEffect } from "react";
import { renderMarkdown } from "../utils/markdown";
import { Link } from "react-router-dom";

function Edit() {
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && outputRef.current) {
      inputRef.current.addEventListener("input", () =>
        renderMarkdown(inputRef.current, outputRef.current)
      );
    }
  }, [inputRef, outputRef]);

  return (
    <div>
      <h1>Edit Document</h1>
      <div className="container">
        <textarea ref={inputRef} />
        <div ref={outputRef} className="markdown-output"></div>
      </div>
      <Link to="/index">Back to Index</Link>
    </div>
  );
}

export default Edit;

