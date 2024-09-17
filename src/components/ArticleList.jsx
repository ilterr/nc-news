import React from "react";
import { fetchArticles } from "../requests/axiosRequests";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [error, setErr] = useState(null);
  useEffect(() => {
    fetchArticles()
      .then((data) => {
        setArticleList(data.articles);
      })
      .catch((err) => {
        setErr("Failed to fetch articles");
        console.log(err);
      });
  }, []);

  return (
    <section>
      {articleList.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </section>
  );
};

export default ArticleList;
