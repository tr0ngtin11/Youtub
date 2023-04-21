import instance from "./baseApi";

export const getVideos = async (pageToken) => {
  const response = await instance.get("/playlistItems", {
    params: {
      pageToken,
    },
  });
  console.log(response);
  return response;
};
