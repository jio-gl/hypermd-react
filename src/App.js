import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Edit from "./components/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;

