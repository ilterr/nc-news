import React from "react";
import ArticleList from "../components/ArticleList";

const Home = ({ articles, updateArticleVotes }) => {
  return (
    <ArticleList articles={articles} updateArticleVotes={updateArticleVotes} />
  );
};

export default Home;
