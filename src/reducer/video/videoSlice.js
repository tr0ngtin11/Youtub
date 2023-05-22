import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: [],
  isLoading: false,
  isLoadingSelectedVideo: false,
  selectedVideo: null,
  page: 1,
};

const videoSlice = createSlice({
  name: 'videos',
  initialState,

  reducers: {
    fetchVideosLoading: (state) => {
      state.isLoading = true;
    },
    fetchVideosSuccess: (state, { payload }) => {
      state.isLoading = false;
      console.log('payload', payload);
      state.data = [
        ...state.data,
        {
          items: payload.data,
          page: payload.currentPage,
        },
      ];
    },
    fetchVideosFail: (state) => {
      state.isLoadingSelectedVideo = false;
    },
    fetchSelectedVideoLoading: (state) => {
      state.isLoadingSelectedVideo = true;
    },
    fetchSelectedVideoSuccess: (state, { payload }) => {
      state.isLoadingSelectedVideo = false;
      state.selectedVideo = payload.data;
    },
    fetchSelectedVideoFail: (state) => {
      state.isLoadingSelectedVideo = false;
    },
    setPageNumber: (state, { payload }) => {
      state.page = payload;
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
  setPageNumber,
  getDataTop,
} = actions;

export default reducer;
