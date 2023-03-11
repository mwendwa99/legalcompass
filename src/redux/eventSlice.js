import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "The First Event",
    content: "This is the first event!",
    date: "2023-03-10",
    color: "red",
    time: "12:00",
    image: "https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
  {
    id: 1,
    title: "The Second Event",
    content: "This is the second event!",
    date: "2023-03-11",
    color: "blue",
    time: "12:00",
    image: "https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
  {
    id: 2,
    title: "The Third Event",
    content: "This is the third event!",
    date: "2023-03-12",
    color: "green",
    time: "12:00",
    image: "https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
];

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const { id, title, content, date, color, time } = action.payload;
      state.push({ id, title, content, date, color, time });
    },
    removeEvent: (state, action) => {
      const { id } = action.payload;
      return state.filter((event) => event.id !== id);
    },
  },
});

export const { addEvent, removeEvent } = eventSlice.actions;

export default eventSlice.reducer;
