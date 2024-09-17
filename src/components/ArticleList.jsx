import React from "react";
import { fetchArticles } from "../requests/axiosRequests";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [isErr, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((data) => {
        setArticleList(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading === true) {
    return <section>Is loading...</section>;
  }

  if (isErr) {
    return <section>{isErr}</section>;
  }

  return (
    <section>
      {articleList.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </section>
  );
};

export default ArticleList;
