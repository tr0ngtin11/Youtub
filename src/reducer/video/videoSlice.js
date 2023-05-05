import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  isLoading: false,
  isLoadingSelectedVideo: false,
  selectedVideo: null,
  page: 1,
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
      state.data = [
        ...state.data,
        {
          nextPageToken: payload.nextPageToken,
          prevPageToken: payload.prevPageToken,
          items: payload.items,
          page: state.page++,
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
      state.selectedVideo = payload;
    },
    fetchSelectedVideoFail: (state) => {
      state.isLoadingSelectedVideo = false;
    },
    setPageNumber: (state, { payload }) => {
      state.page = payload;
    },
    ChangeData: (state, { payload }) => {
      if (payload > 1) {
        state.data.forEach((item, index) => {
          if (index === payload - 2) {
            const emptyItems = item.items.map(() => undefined);
            item.items = emptyItems;
          }
        });
      }
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
  ChangeData,
  getDataTop,
} = actions;

export default reducer;
