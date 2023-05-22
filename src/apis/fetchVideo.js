import instance from './baseApi';
export const getVideos = async (page, pagesize) => {
  const response = await instance.get('/video', {
    params: {
      page,
      pagesize,
    },
  });

  console.log('b', response);
  return response;
};
