import React from "react";
// import { fetchArticles } from "../requests/axiosRequests";
// import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Grid from "@mui/material/Grid2";
import useFetchArticles from "../hooks/useFetchArticles";

const ArticleList = () => {
  const { articles, isLoading, error } = useFetchArticles();
  console.log(articles);

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
