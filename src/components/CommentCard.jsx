import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <article className="commentCard">
      <div className="commentBody">
        <p>{comment.body}</p>
        <div className="author">{comment.author}</div>
        <div className="createdAt">{comment.created_at}</div>
        <div className="votes">{comment.votes}</div>
      </div>
    </article>
  );
};

export default CommentCard;
