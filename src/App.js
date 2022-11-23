import "./App.css";
import React from "react";
import Home from "./components/Home";
import Post from "./components/Post";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
