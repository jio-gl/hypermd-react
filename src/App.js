import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AccountProvider } from "./contexts/AccountContext";
import Index from "./components/Index";
import Edit from "./components/Edit";
import Header from './components/Header';

function App() {
  return (
    <AccountProvider>
      <Router>
      <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/edit/:itemId?" element={<Edit />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </Router>
    </AccountProvider>
  );
}

export default App;

