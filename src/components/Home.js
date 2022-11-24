import React, { useEffect } from "react";
import BackgroundSlide from "./Background";
import { fetchPosts, educationPosts, sciencePosts, healthPosts, techPosts } from "../redux/HomeSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Posts from './Posts';


const Home = () => {
 const dispatch = useDispatch();
 const  { posts } = useSelector((state) => state.posts)

useEffect(() => {
 dispatch(fetchPosts());
}, [dispatch]);

const handleClick = () => {
  dispatch(fetchPosts());
};

const handleDisplayEducationSearch = () => {
  dispatch(educationPosts());
}

const handleDisplayScienceSearch = () => {
  dispatch(sciencePosts());
}

const handleDisplayHealthSearch = () => {
  dispatch(healthPosts());
}

const handleDisplayTechSearch = () => {
  dispatch(techPosts());
}

     console.log(posts);

  return (
    <div>
      <BackgroundSlide />
      <div className='categories'>
        <Button
          variant='outline-secondary'
          className='btn btn-tag btn-rounded'
          onClick={handleClick}
        >
          All
        </Button>
        <Button
          variant='outline-secondary'
          onClick={handleDisplayEducationSearch}
          className='btn btn-tag btn-rounded'
        >
          Education
        </Button>
        <Button
          variant='outline-secondary'
          onClick={handleDisplayScienceSearch}
          className='btn btn-tag btn-rounded'
        >
          Science
        </Button>
        <Button
          variant='outline-secondary'
          onClick={handleDisplayHealthSearch}
          className='btn btn-tag btn-rounded'
        >
          Health
        </Button>
        <Button
          variant='outline-secondary'
          onClick={handleDisplayTechSearch}
          className='btn btn-tag btn-rounded'
        >
          Technology
        </Button>
      </div>

      <div className='home-container'>
        {posts?.data?.map((post) => (
          <Posts key={post.id} post={post}></Posts>
        ))}
      </div>
    </div>
  );
};

export default Home;

