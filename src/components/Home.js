import React, { useEffect } from "react";
import { fetchPosts, educationPosts, sciencePosts, healthPosts, techPosts } from "../redux/HomeSlice";
import { useSelector, useDispatch } from "react-redux";
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
      <button onClick={handleClick}>All</button>
      <button onClick={handleDisplayEducationSearch}>Education</button>
      <button onClick={handleDisplayScienceSearch}>Science</button>
      <button onClick={handleDisplayHealthSearch}>Health</button>
      <button onClick={handleDisplayTechSearch}>Technology</button>
      {posts?.data?.map((post) => (
        <Posts key={post.id} post={post}></Posts>
      ))}
    </div>
  );
};

export default Home;

