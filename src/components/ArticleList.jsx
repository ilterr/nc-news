import React from "react";
import { fetchArticles } from "../requests/axiosRequests";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Grid from "@mui/material/Grid2";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch articles");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <section>Is loading...</section>;
  }

  if (error) {
    return <section>{"Error fetching articles"}</section>;
  }

  return (
    <Grid container spacing={2}>
      {articles.articles.map((article) => {
        return (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={article.article_id}>
            <ArticleCard article={article} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticleList;
