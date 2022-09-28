import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
// import { BlogLists } from '../../config/data';
import { useEffect } from "react"

const Home = () => {
  const [searchKey, setSearchKey] = useState('');
  const [blogLists, setBlogLists] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((data) => data.json())
    .then((data) => setBlogs(data))
  }, []);
  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    // const allBlogs = blogs;
    const filteredBlogs = blogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogs);
    setSearchKey('');
  };
console.log('ee', blogs)
  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
