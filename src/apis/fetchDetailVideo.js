import instanceDetail from './baseApiDetailVideo';

export const getDetailVideo = async (id) => {
  const response = await instanceDetail.get(`/video/${id}`);
  console.log(response);
  return response;
};

export const increaseView = async (id) => {
  const response = await instanceDetail.put(`/video/${id}`);
  console.log(response);
  return response;
};
