import { getDetailVideo } from "../../apis/fetchDetailVideo";
import { getVideos } from "../../apis/fetchVideo";
import {
  fetchVideosLoading,
  fetchVideosSuccess,
  fetchVideosFail,
  fetchSelectedVideoFail,
  fetchSelectedVideoLoading,
  fetchSelectedVideoSuccess,
} from "./videoSlice";

export const fetchVideos = () => async (dispatch) => {
  try {
    dispatch(fetchVideosLoading());
    const response = await getVideos();
    dispatch(fetchVideosSuccess(response.data.items));
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
