import React, { useState } from "react";
import { Box, Typography, Avatar, CardMedia } from "@mui/material";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import { patchVotes } from "../requests/axiosRequests";

const ArticleMain = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);

  const time = article.created_at.slice(11, 16);
  const date = article.created_at.slice(0, 10);

  const handleVoteUp = () => {
    const optimisticVote = votes + 1;
    setVotes(optimisticVote);
    patchVotes(article.article_id, 1).catch((err) => {
      console.log(err);
    });
  };

  const handleVoteDown = () => {
    const optimisticVotes = votes - 1;
    setVotes(optimisticVotes);
    patchVotes(article.article_id, -1).catch((err) => {
      setVotes(votes);
    });
  };

  return (
    <Box
      sx={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Avatar sx={{ marginRight: 2 }}>TBC</Avatar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h6" component="div">
            {article.author}
          </Typography>
          <BsHandThumbsUp onClick={handleVoteUp} />
          <Typography>{votes}</Typography>
          <BsHandThumbsDown onClick={handleVoteDown} />
          <Typography variant="body1" color="text.secondary">
            {`Created at ${time} / ${date}`}
          </Typography>
        </Box>
      </Box>

      {article.article_img_url && (
        <CardMedia
          component="img"
          height="300"
          image={article.article_img_url}
          alt={article.title}
          sx={{ marginBottom: 2 }}
        />
      )}

      <Typography variant="h4" component="h1" gutterBottom>
        {article.title}
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>{article.body}</Typography>
    </Box>
  );
};

export default ArticleMain;
