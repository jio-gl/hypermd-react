import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <h1>Welcome to HyperMD</h1>
      <Link to="/edit">Create a new document</Link>
    </div>
  );
}

export default Index;

