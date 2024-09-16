import React from "react";

const ArticleCard = ({ article }) => {
  console.log(article, "<---- LOG");
  return (
    <section className="articleCard">
      <h2>{article.title}</h2>
      <img src={article.articles_img_url} width={100} height={100} />
      <p>{article.body}</p>
      <button>See comments</button>
    </section>
  );
};

export default ArticleCard;
