import React from 'react';
import { Link,  useLocation } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Post = () => {
 const { state: { post } } = useLocation();
  return (
    <div>
      <Link to='/'>
        {" "}
        <BsFillArrowLeftCircleFill />
      </Link>

      <h1>{post.title}</h1>
      <div>
        <h3>Article by {post.author}</h3>
        <h3>{post.date}</h3>
        <h3>{post.time}</h3>
      </div>
      <img src={post.imageUrl} width='200px' height='200px' alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
}

export default Post;

