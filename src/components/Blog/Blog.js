import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Blog.css";
import { toast } from "react-toastify";

const Blog = ({ post,handleWatchTime,handleBookMark }) => {
  const { url, img, name, watchTime, date, title, blogTitle } = post;
  return (
    <div className="data-card card">
      <div className="data-photo">
        <img className="w-50" src={url} alt="" />
      </div>

      <div className="time d-flex justify-content-around align-items-center mt-3">
        <img className="author-img" src={img} alt="" />
        <h6 className="author-name">{name}</h6>
        <p>Watch Time : {watchTime} </p>

        <FontAwesomeIcon
            onClick={() => handleBookMark(post)}
          icon={faBookBookmark}
        />
      </div>
      <p className="ms-5">Data:{date}</p>
      <h6 className="ms-5">{title} </h6>
      <h4 className="ms-5">{blogTitle} </h4>
      <button
        onClick={() => handleWatchTime(post.watchTime)}
        className="btn btn-info w-25 mb-3"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
