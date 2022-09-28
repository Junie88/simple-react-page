import React from 'react';
import ItemList from './ItemList';
import './styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <ItemList blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
