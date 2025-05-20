import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/blogs/").then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <div className="blog-container">
      <div>
        <h1 className="blog-title">Blog List</h1>
        <Link to="/add" className="add-blog-link">Add New Blog</Link>
        <ul className="blog-list">
          {blogs.map((blog) => (
            <li key={blog.id} className="blog-item">
              <h2 className="blog-item-title">{blog.title}</h2>
              <p className="blog-item-content">{blog.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
