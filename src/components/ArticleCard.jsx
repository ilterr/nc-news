import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  const truncatedBody =
    article.body.length > 200
      ? `${article.body.slice(0, 200)}...`
      : article.body;

  const createdAtDate = `${article.created_at.slice(0, 10)}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="User"></Avatar>}
        title={`${article.author}`}
        subheader={createdAtDate}
      />
      <CardActionArea>
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
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
            }}
          >
            {truncatedBody}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`articles/${article.article_id}`}>
          <Button size="small" color="primary">
            See comments ({article.comment_count})
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;
