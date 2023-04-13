import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./reducer/video/videoSlice";

const reducer = {
  videos: videoReducer,
};

const store = configureStore({
  reducer,
});

export default store;
