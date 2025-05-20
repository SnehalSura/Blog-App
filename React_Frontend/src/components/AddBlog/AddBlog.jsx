import React, { useState } from "react";
import axios from "axios";
import "./AddBlog.css";
import { Link } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/blogs/", { title, content })
      .then(() => {
        setMessage("Blog added successfully!");
        setTitle("");
        setContent("");
      })
      .catch(() => setMessage("Failed to add blog"));
  };

  return (
    <div>
      <div className="form-container">
        <h1 className="form-title">Add Blog</h1>
        {message && <p className="form-message">{message}</p>}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="form-label">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-button">Add Blog</button>
        </form>
      </div>
      <div className="back-to-list-container">
        <Link to="/" className="back-to-list">Back to List</Link>
      </div>
    </div>
  );
};

export default AddBlog;
