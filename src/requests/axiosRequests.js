import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://ilters-news.onrender.com",
});

export function fetchArticles() {
  return newsApi.get("/api/articles").then(({ data }) => {
    return data;
  });
}
