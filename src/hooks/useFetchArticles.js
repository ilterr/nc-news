import { useState, useEffect } from "react";
import { fetchArticles } from "../requests/axiosRequests";

const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch articles");
        setIsLoading(false);
      });
  }, []);

  return { articles, isLoading, error };
};

export default useFetchArticles;
