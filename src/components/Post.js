import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Post = () => {
  const {
    state: { post },
  } = useLocation();
  return (
    <div>
      <Link to="/">
        {' '}
        <BsFillArrowLeftCircleFill className="arrow-left" />
      </Link>

      <h1 className="title-post">{post.title}</h1>
      <div className="post-information">
        <h4 className="article">
          Article by
          {post.author}
        </h4>
        <h4 className="article">{post.date}</h4>
        <h4 className="article">{post.time}</h4>
      </div>
      <div className="post-image2">
        <img
          src={post.imageUrl}
          width="200px"
          height="200px"
          alt={post.title}
          className="post-image"
        />
      </div>
      <p className="post-content">{post.content}</p>
    </div>
  );
};

export default Post;
