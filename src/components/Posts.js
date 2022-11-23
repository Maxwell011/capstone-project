import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({post}) => {
 const { title, author, id, imageUrl } = post;
    return (
      <div className='home-container'>
       <Link to={`/post/${id}`} state={{post, id}}>
        <h2 className='title'>{title}</h2>
        </Link>
        <img src={imageUrl} width='300px' height='300px' alt={title} />
        <h2>{author}</h2>
      </div>
    );
}

export default Posts;