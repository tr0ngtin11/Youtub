import { Box, Grid } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import SideBar from './SideBar';
import Recommend from '../recommendation/Recommend';
import Videos from './videos/Videos';
import { useDispatch } from 'react-redux';
import { fetchVideos } from '../../reducer/video/videoActions';
import { useLocation, useNavigate } from 'react-router-dom';
const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { data } = useSelector((state) => state.videos);
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log('queryParams', queryParams.get('pagesize'));
  const screenWidth = window.innerWidth;
  let pageSize;
  if (queryParams.get('pagesize')) {
    pageSize = parseInt(queryParams.get('pagesize'));
  } else {
    pageSize = screenWidth > 960 ? 25 : 5;
  }
  const loaderBottom = useRef();
  const loaderTop = useRef();
  // const [isIntersectingTop, setIsIntersectingTop] = useState(false);
  // const [isIntersectingBottom, setIsIntersectingBottom] = useState(false);
  //Bottom
  useEffect(() => {
    // Options is an object of configuration used to establish the values of Intersectionoberver
    // Viewport is used as root
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('intersecting Bottom', entries);
        // setIsIntersectingBottom(true);
        setPageNumber((prev) => prev + 1);
      }
    }, options);
    if (loaderBottom.current) {
      observer.observe(loaderBottom.current);
    }
  }, []);
  //Top

  useEffect(() => {
    // Options is an object of configuration used to establish the values of Intersectionoberver
    // Viewport is used as root
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('intersecting Top', entries);
        setPageNumber((prev) => prev - 1);
      }
    }, options);
    if (loaderTop.current) {
      observer.observe(loaderTop.current);
    }
  }, []);

  // useEffect(() => {
  //   if (isIntersectingTop && isIntersectingBottom) {
  //     const pageToke = data[pageNumber - 1]?.prevPageToken;
  //   }
  // }, [isIntersectingBottom, isIntersectingTop]);

  useEffect(() => {
    dispatch(fetchVideos(pageNumber, pageSize));
    navigate(`?page=${pageNumber}&pagesize=${pageSize}`);
  }, [pageNumber, dispatch]);

  return (
    <Grid
      columns={{
        xs: 16,
        sm: 16,
        md: 16,
        lg: 24,
        xl: 16,
      }}
      container
      spacing={1}
    >
      <Grid
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'none',
            lg: 'block',
            xl: 'block',
          },
        }}
        item
        lg={1}
        xl={1}
      >
        <SideBar />
      </Grid>
      <Grid item xs={16} sm={16} md={16} lg={23} xl={15}>
        <Box
          sx={{
            maxWidth: {
              sm: '100%',
              xs: '100%',
              md: '100%',
              lg: 'calc(100% - 80px)',
            },
            marginTop: {
              lg: '20px',
            },
            marginX: 'auto',
            height: '40px',
            position: 'sticky',
            zIndex: 1,
            backgroundColor: '#fff',
            pb: 1,
            top: {
              sm: '0',
            },
          }}
        >
          <Recommend quantity={8} />
        </Box>
        <Videos
          loaderBottom={loaderBottom}
          loaderTop={loaderTop}
          pageNumber={pageNumber}
        />
      </Grid>
    </Grid>
  );
};

export default Feed;
