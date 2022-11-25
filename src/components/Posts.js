import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Posts = ({ post }) => {
  const { id, imageUrl, title } = post;
  return (
    <div className='posts-container'>
      <img
        src={imageUrl}
        width='400px'
        height='200px'
        alt={title}
        className='home-image'
      />
      <div className='post-info'>
        <h2 className='news'>NEWS</h2>
        <div>
          <Link to={`/post/${id}`} state={{ post, id }} className='links'>
            <br />
            <BsFillArrowRightCircleFill className='right-arrow' />
            <br />
          </Link>
        </div>
      </div>
      <h2 className='title'>{title}</h2>
    </div>
  );
};

export default Posts;
