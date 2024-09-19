import React from "react";
import { fetchArticles } from "../requests/axiosRequests";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Grid from "@mui/material/Grid2";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [isErr, setIsErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((data) => {
        setArticleList(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsErr(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading === true) {
    return <section>Is loading...</section>;
  }

  if (isErr === true) {
    return <section>{"Error fetching articles"}</section>;
  }

  return (
    <Grid container spacing={2}>
      {articleList.map((article) => {
        return (
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ArticleCard article={article} key={article.article_id} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticleList;
