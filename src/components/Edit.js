import React, { useRef, useEffect, useContext, useState } from "react";
import { renderMarkdown } from "../utils/markdown";
import { Link, useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AccountContext from "../contexts/AccountContext";

function Edit() {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const { accountId } = useContext(AccountContext);
  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current && outputRef.current) {
      inputRef.current.addEventListener("input", () =>
        renderMarkdown(inputRef.current, outputRef.current)
      );
    }

    if (itemId) {
      const itemText = localStorage.getItem(itemId);
      if (itemText) {
        inputRef.current.value = itemText;
        renderMarkdown(inputRef.current, outputRef.current);
      }
    }
  }, [inputRef, outputRef, itemId]);

  const handleCreateItem = () => {
    if (accountId) {
      const newItemId = uuidv4();
      navigate(`/edit/${newItemId}`);
    } else {
      alert("You must create or import an account first.");
    }
  };

  const handleCopyLinkToItem = () => {
    if (itemId) {
      const itemUrl = `${window.location.origin}/#/edit/${itemId}`;
      navigator.clipboard.writeText(itemUrl);
      alert("Item link copied to clipboard.");
    } else {
      alert("No item to copy.");
    }
  };

  const handleSaveItem = () => {
    if (itemId && inputRef.current.value) {
      localStorage.setItem(itemId, inputRef.current.value);
      alert("Item saved.");
    } else {
      alert("No item to save.");
    }
  };


  return (
    <div>
      <h1>Edit Document</h1>
      <div className="container">
        <textarea ref={inputRef} />
        <div ref={outputRef} className="markdown-output"></div>
      </div>
      <button onClick={handleCreateItem}>Create Item</button>
      <button onClick={handleCopyLinkToItem}>Copy Link to Item</button>
      <button onClick={handleSaveItem}>Save Item</button>
      <Link to="/index">Back to Index</Link>
    </div>
  );
}

export default Edit;

