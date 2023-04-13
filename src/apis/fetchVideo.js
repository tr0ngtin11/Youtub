import instance from "./baseApi";

export const getVideos = async () => {
  const response = await instance.get("/playlistItems");
  console.log(response);
  return response;
};
