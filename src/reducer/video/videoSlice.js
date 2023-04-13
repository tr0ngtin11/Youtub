import { light } from "@mui/material/styles/createPalette";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  videos: [],
  isLoading: false,
  selectedVideo: null,
  pageNUmber: 0,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,

  reducers: {
    fetchVideosLoading: (state) => {
      state.isLoading = true;
    },
    fetchVideosSuccess: (state, { payload }) => {
      state.isLoading = false;

      state.videos = [...state.videos.slice(0, 20), ...payload];
    },
    fetchVideosFail: (state, { payload }) => {
      state.isLoading = false;
    },
    fetchSelectedVideoLoading: (state) => {
      state.isLoading = true;
    },
    fetchSelectedVideoSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.selectedVideo = payload;
    },
    fetchSelectedVideoFail: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = videoSlice;

export const {
  fetchVideosLoading,
  fetchVideosSuccess,
  fetchVideosFail,
  fetchSelectedVideoFail,
  fetchSelectedVideoLoading,
  fetchSelectedVideoSuccess,
  setListVideo,
} = actions;

export default reducer;
