import { configureStore } from '@reduxjs/toolkit';
import postSlice from './HomeSlice';

const store = configureStore({
 reducer:{
  posts: postSlice,
 }
 });

export default store;
