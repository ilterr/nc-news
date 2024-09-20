import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useFetchArticles from "./hooks/useFetchArticles";
import { useState, useEffect } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const { fetchedArticles, isLoading, error } = useFetchArticles();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (fetchedArticles) {
      setArticles(fetchedArticles);
    }
  }, [fetchedArticles]);

  const updateArticleVotes = (article_id, inc_votes) => {
    setArticles((currArticles) => {
      return currArticles.map((article) =>
        article.article_id === article_id
          ? { ...article, votes: article.votes + inc_votes }
          : article
      );
    });
  };

  if (isLoading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div>Error fetching articles</div>;
  }

  return (
    <>
      <div>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  articles={articles}
                  updateArticleVotes={updateArticleVotes}
                />
              }
            />
            <Route
              path="/articles/:article_id"
              element={
                <ArticlePage
                  articles={articles}
                  updateArticleVotes={updateArticleVotes}
                />
              }
            />
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
