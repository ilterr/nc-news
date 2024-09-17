import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";

const App = () => {
  return (
    <div>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
};

export default App;
