import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./contentSlice";
import eventSlice from "./eventSlice";
// import bannerSlice from "./bannerSlice";

export const store = configureStore({
  reducer: {
    content: contentSlice,
    events: eventSlice,
  },
});
