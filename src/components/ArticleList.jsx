import React from "react";
import ArticleCard from "./ArticleCard";
import Grid from "@mui/material/Grid2";

const ArticleList = ({ articles, updateArticleVotes }) => {
  return (
    <Grid container spacing={2}>
      {articles.map((article) => {
        return (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={article.article_id}>
            <ArticleCard
              article={article}
              updateArticleVotes={updateArticleVotes}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticleList;
