import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="data-container">
        {data.map((post) => (
          <Blog key={post.id} post={post}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
