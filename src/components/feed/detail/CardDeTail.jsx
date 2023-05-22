import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
const CardDeTail = ({ item }) => {
  return (
    <Link
      to={`/${item.id}`}
      state={{
        idVideo: item.snippet.resourceId.videoId,
      }}
    >
      <Card
        sx={{
          marginBottom: '10px',
          border: 'none',
          boxShadow: 'none',
          cursor: 'pointer',
          width: '100%',
          display: 'flex',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <CardMedia
            component="img"
            src={item?.snippet.thumbnails.medium.url}
            sx={{
              borderRadius: '12px',
              height: '104px',
              width: {
                xs: '140px',
                lg: '180px',
              },
            }}
          />
          <CardContent
            sx={{
              paddingTop: '0',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: 'break-word',
                fontFamily: 'YouTube Sans, Roboto, sans-serif',
                fontWeight: '550',
                fontSize: '16px',
                lineHeight: '1.2rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                paddingTop: '2px',
                maxWidth: {
                  xs: '200px',
                },
              }}
            >
              {item?.snippet.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Typography
                sx={{
                  color: '#606060',
                  fontSize: '0.8rem',
                }}
              >
                PedroTech
              </Typography>
              <CheckCircleIcon
                sx={{
                  width: '14px',
                  height: '14px',
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  color: '#606060',
                  fontSize: '0.875rem',
                  marginRight: '10px',
                }}
              >
                93N lượt xem
              </Typography>
              <Typography
                sx={{
                  color: '#606060',
                  fontSize: '0.875rem',
                }}
              >
                20h giờ trước
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default CardDeTail;
