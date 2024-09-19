import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

function ArticleCard({ article }) {
  const truncatedBody =
    article.body.length > 200
      ? `${article.body.slice(0, 200)}...`
      : article.body;

  const time = article.created_at.slice(12, 16);
  const date = article.created_at.slice(12, 16);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="User"></Avatar>}
        title={`${article.author}`}
        subheader={`Posted at ${time} / ${date}`}
      />
      <CardActionArea component={Link} to={`articles/${article.article_id}`}>
        <CardMedia
          component="img"
          height="140"
          image={`${article.article_img_url}`}
          alt={`${article.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${article.title}`}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {truncatedBody}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{ display: "inline-flex" }}>
        <Link to={`articles/${article.article_id}`}>
          <Button size="small">See comments ({article.comment_count})</Button>
        </Link>
        <Typography>{article.votes}</Typography>
      </Box>
    </Card>
  );
}

export default ArticleCard;
