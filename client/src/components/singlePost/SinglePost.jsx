import "./singlePost.css";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://test-for-release.herokuapp.com/images/";
  const { user } = useContext(Context);

  const content = post.desc;
  const contentArr = (content || "").split("\n");

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo !== undefined ? (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        ) : null}

        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.usernae && (
            <div className="singlePostEdit">
              <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i
                class="singlePostIcon fa-solid fa-trash"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>

          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString}
          </span>
        </div>
        {contentArr.map((c) => (
          <p className="postDesc">{c}</p>
        ))}
      </div>
    </div>
  );
}
