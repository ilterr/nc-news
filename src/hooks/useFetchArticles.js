import { useState, useEffect } from "react";
import { fetchArticles } from "../requests/axiosRequests";

const useFetchArticles = () => {
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
      .then((data) => {
        setFetchedArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch articles");
        setIsLoading(false);
      });
  }, []);

  return { fetchedArticles, isLoading, error };
};

export default useFetchArticles;
