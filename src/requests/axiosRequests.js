import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://ilters-news.onrender.com",
});

export function fetchArticles() {
  return newsApi.get("/api/articles").then(({ data }) => {
    return data;
  });
}

export function fetchArticleById(article_id) {
  return newsApi.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data;
  });
}

export function fetchCommentsById(article_id) {
  return newsApi
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
}

export function patchVotes(article_id, inc_votes) {
  return newsApi
    .patch(`/api/articles/${article_id}`, { inc_votes })
    .then(({ data }) => {
      return data;
    });
}
