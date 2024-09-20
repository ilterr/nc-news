import { Box, Typography, Avatar, CardMedia } from "@mui/material";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";

const ArticleMain = ({ article, articles, updateArticleVotes }) => {
  const { article_id } = article;

  const time = article.created_at.slice(11, 16);
  const date = article.created_at.slice(0, 10);

  const handleVoteUp = () => {
    updateArticleVotes(article_id, 1);
  };

  const handleVoteDown = () => {
    updateArticleVotes(article_id, -1);
  };

  const updatedArticle = articles.find(
    (article) => article.article_id === article_id
  );

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
          <Typography>{updatedArticle.votes}</Typography>
          <BsHandThumbsDown onClick={handleVoteDown} />
          <Typography variant="body1" color="text.secondary">
            {`Posted at ${time} / ${date}`}
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
