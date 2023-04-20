import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountContext from "../contexts/AccountContext";
import { v4 as uuidv4 } from 'uuid';

function Index() {
  const { accountId, createAccount, importAccount } = useContext(AccountContext);
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  const getDocuments = () => {
    const documents = JSON.parse(localStorage.getItem('documents')) || [];
    return documents;
  };

  useEffect(() => {
    setDocuments(getDocuments());
  }, []);

  const handleImportAccount = () => {
    const id = prompt("Enter your account UUID:");
    if (id) {
      importAccount(id);
    }
  };

  const handleCopyAccount = () => {
    if (accountId) {
      navigator.clipboard.writeText(accountId);
      alert("Account ID copied to clipboard.");
    } else {
      alert("No account ID to copy.");
    }
  };

  const saveDocument = (document) => {
    const currentDocuments = JSON.parse(localStorage.getItem('documents')) || [];
    currentDocuments.push(document);
    localStorage.setItem('documents', JSON.stringify(currentDocuments));
  };
  
  const handleCreateNewDocument = () => {
    const newDocument = {
      id: uuidv4(),
      title: '',
      content: '',
    };
  
    saveDocument(newDocument);
    setDocuments([...documents, newDocument]);
    navigate(`/edit/${newDocument.id}`);
  };
  
  return (
    <div>
      <h1>Welcome to HyperMD</h1>
      <button onClick={createAccount}>Create Account</button>
      <button onClick={handleImportAccount}>Import Account</button>
      <button onClick={handleCopyAccount}>Copy Account</button>
      <button onClick={handleCreateNewDocument}>+ Create a new document</button>
      {accountId && <p>Account ID: {accountId}</p>}

      <div>
        <h2>Saved Documents</h2>
        <ul>
          {documents.map((doc) => (
            <li key={doc.id}>
              <Link to={`/edit/${doc.id}`}>{doc.title || doc.id}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Index;