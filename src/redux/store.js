import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./contentSlice";
// import bannerSlice from "./bannerSlice";

export const store = configureStore({
  reducer: {
    content: contentSlice,
    // banner: bannerSlice,
  },
});
