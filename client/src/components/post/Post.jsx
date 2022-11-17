import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

<<<<<<< HEAD
export default function Post({ post }) {
  //const PF = "http://localhost:5000/images/";
=======
export default function Post({post}) {
>>>>>>> d82c69fcd2bcddc92f9991c43eba2886d54c1059
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.map}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
