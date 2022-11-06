import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  0: {
    id: 0,
    title: "The First Post",
    content: "This is the first post!",
  },
  1: {
    id: 1,
    title: "The Second Post",
    content: "This is the second post!",
  },
  2: {
    id: 2,
    title: "The Third Post",
    content: "This is the third post!",
  },
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { id, title, content } = action.payload;
      state[id] = { id, title, content };
    },
  },
});

export const { addPost } = contentSlice.actions;

export default contentSlice.reducer;
