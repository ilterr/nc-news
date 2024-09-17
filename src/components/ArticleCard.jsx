import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <article className="articleCard">
      <div className="articleBody">
        <div className="articleHeader">
          <div className="author">{article.author}</div>
          <h2 className="title">{article.title}</h2>
          <div className="topic">{article.topic}</div>
          <div className="createdAt">{article.created_at}</div>
        </div>
        <p>{article.body}</p>
        <button type="button">See comments ({article.comment_count})</button>
      </div>
      <img src={article.article_img_url} alt={`Image for ${article.title}`} />
    </article>
  );
};

export default ArticleCard;
