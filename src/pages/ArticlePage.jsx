import { useState, useEffect } from "react";
import { fetchArticleById } from "../requests/axiosRequests";
import ArticleCard from "../components/ArticleCard";
import { useParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isErr, setIsErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((data) => {
        setArticle(data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsErr(true);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading === true) {
    return <section>Is loading...</section>;
  }
  if (isErr === true) {
    return <section>{"Problem with retrieving articles"}</section>;
  }

  return (
    <>
      <ArticleCard article={article} />;
      <CommentsContainer article_id={article_id} />
    </>
  );
};

export default ArticlePage;
