import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList/BlogList";
import AddBlog from "./components/AddBlog/AddBlog";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/add" element={<AddBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
