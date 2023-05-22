import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../../reducer/video/videoActions';
import CardDeTail from './CardDeTail';
const ListVideo = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.videos);
  // const [pageNumber, setPageNumber] = useState(0);
  // const fetchData = () => {
  //   setPageNumber((prev) => prev + 1);
  // };

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const rowRenderer = () => {
    return (
      <div>
        {data.map((ob) =>
          ob.items.map((item) => <CardDeTail key={item._id} item={item} />),
        )}
      </div>
    );
  };
  return (
    <Box
      sx={{
        paddingLeft: {
          xs: '0px',
          sm: '0px',
          md: '40px',
          lg: '40px',
          xl: '40px',
        },
        paddingRight: {
          xs: '0px',
          sm: '0px',
          md: '40px',
          lg: '40px',
          xl: '40px',
        },
      }}
    >
      {rowRenderer()}
    </Box>
  );
};

export default ListVideo;
