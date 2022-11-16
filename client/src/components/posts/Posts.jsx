import Post from "../post/Post";
import "./posts.css";
import React from "react";

export default function Posts() {
  return (
    <div className="posts">{Post && Posts.map((p) => <Post post={p} />)}</div>
  );
}
