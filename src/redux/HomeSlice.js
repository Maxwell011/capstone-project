/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://inshorts.deta.dev/news?category=all');
  const data = await response.json();
  return data;
});

export const educationPosts = createAsyncThunk(
  'posts/educationPosts',
  async () => {
    const response = await fetch(
      'https://inshorts.deta.dev/news?category=education',
    );
    const data = await response.json();
    return data;
  },
);

export const sciencePosts = createAsyncThunk(
  'posts/sciencePosts',
  async () => {
    const response = await fetch(
      'https://inshorts.deta.dev/news?category=science',
    );
    const data = await response.json();
    return data;
  },
);

export const healthPosts = createAsyncThunk(
  'posts/healthPosts',
  async () => {
    const response = await fetch(
      'https://inshorts.deta.dev/news?category=health',
    );
    const data = await response.json();
    return data;
  },
);

export const techPosts = createAsyncThunk(
  'posts/techPosts',
  async () => {
    const response = await fetch(
      'https://inshorts.deta.dev/news?category=technology',
    );
    const data = await response.json();
    return data;
  },
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
  },

  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(educationPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(educationPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(educationPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(sciencePosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sciencePosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(sciencePosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(healthPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(healthPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(healthPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(techPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(techPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(techPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
