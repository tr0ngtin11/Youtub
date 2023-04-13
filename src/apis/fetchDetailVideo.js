import instanceDetail from "./baseApiDetailVideo";

export const getDetailVideo = async (id) => {
  const response = await instanceDetail.get("/videos", { params: { id: id } });
  console.log(response);
  return response;
};
