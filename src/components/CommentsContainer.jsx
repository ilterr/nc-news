import React from "react";
import { useState, useEffect } from "react";
import { fetchCommentsById } from "../requests/axiosRequests";
import CommentCard from "./CommentCard";

const CommentsContainer = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isErr, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsById(article_id)
      .then((data) => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading === true) {
    return <section>Is loading...</section>;
  }

  if (isErr) {
    return <section>{isErr}</section>;
  }

  return (
    <section>
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </section>
  );
};

export default CommentsContainer;
