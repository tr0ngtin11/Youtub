import { getDetailVideo } from "../../apis/fetchDetailVideo";
import { getVideos } from "../../apis/fetchVideo";
import {
  fetchVideosLoading,
  fetchVideosSuccess,
  fetchVideosFail,
  fetchSelectedVideoFail,
  fetchSelectedVideoLoading,
  fetchSelectedVideoSuccess,
  setPageNumber,
  getDataTop,
} from "./videoSlice";

export const fetchVideos = (pageNumber, pageToken) => async (dispatch) => {
  try {
    dispatch(fetchVideosLoading());
    dispatch(setPageNumber(pageNumber));
    const response = await getVideos(pageToken);
    dispatch(fetchVideosSuccess(response.data));
  } catch (error) {
    dispatch(fetchVideosFail(error.message));
  }
};

export const fetchSelectedVideo = (id) => async (dispatch) => {
  try {
    dispatch(fetchSelectedVideoLoading());
    const response = await getDetailVideo(id);
    dispatch(fetchSelectedVideoSuccess(response.data.items[0]));
  } catch (error) {
    dispatch(fetchSelectedVideoFail(error.message));
  }
};

export const fetchVideosTop = (pageToken) => async (dispatch) => {
  try {
    dispatch(fetchVideosLoading());
    const response = await getVideos(pageToken);
    dispatch(getDataTop(response.data));
  } catch (error) {
    dispatch(fetchVideosFail(error.message));
  }
};
