import Post from "../post/Post";
import "./posts.css";
import React from "react";

export default function Posts() {
  return (
    <div className="posts">
      {Posts.title.map((p) => (
        <Post />
      ))}
    </div>
  );
}
