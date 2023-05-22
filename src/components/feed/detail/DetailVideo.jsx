import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { fetchSelectedVideo } from '../../../reducer/video/videoActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReplyIcon from '@mui/icons-material/Reply';
import { useTranslation } from 'react-i18next';
const DetailVideo = () => {
  const { t } = useTranslation('detail');
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selectedVideo } = useSelector((state) => state.videos);
  const location = useLocation();
  const idVideo = location.state.idVideo;
  console.log(selectedVideo);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Thêm hiệu ứng cuộn mượt
    });
    dispatch(fetchSelectedVideo(id));
  }, [dispatch, id]);

  useEffect(() => {}, []);
  return (
    <>
      <Box
        sx={{
          paddingLeft: {
            xs: '0px',
            sm: '0px',
            md: '40px',
            lg: '40px',
            xl: '40px',
          },
        }}
      >
        <Box>
          <iframe
            title={selectedVideo?.snippet?.title}
            key={selectedVideo?.id?.videoId}
            src={`https://www.youtube.com/embed/${idVideo}`}
            width="100%"
            height="380px"
            allowFullScreen={true}
            style={{
              border: 'none',
              borderRadius: '4px',
            }}
          ></iframe>
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{
              wordBreak: 'break-word',
              fontFamily: 'YouTube Sans, Roboto, sans-serif',
              fontWeight: '550',
              fontSize: '1.2rem',
              // lineHeight: "2.5rem",
              marginTop: '12px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              maxHeight: '4,4rem',
            }}
          >
            {selectedVideo?.snippet?.title}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '12px',
            overflowX: 'hidden',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: {
                xs: '100%',
                lg: '50%',
              },
            }}
          >
            <img
              alt="avatar"
              src="https://yt3.ggpht.com/B6fTtYN-Wtm1Gi-VK4ZPdWof0vfEKYOvbax_HtfExRErG00seqMuCYR1YFQWH0x92KITAUAms4U=s88-c-k-c0x00ffffff-no-rj"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                marginRight: '12px',
              }}
            />
            <Stack
              direction="column"
              sx={{
                marginRight: '20px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Roboto, Arial , sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.4',
                    fontWeight: '450',
                  }}
                  variant="h6"
                >
                  Soul of The Forest
                </Typography>
                <CheckCircleIcon
                  sx={{
                    height: '14px',
                    width: '14px',
                    pl: '4px',
                    backgroundColor: 'transparent',
                    opacity: '0.6',
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    lineHeight: '1.4',
                    fontWeight: '400',
                    whiteSpace: 'nowrap',
                    color: '#606060',
                  }}
                >
                  273 N {t('nguoidangky')}
                </Typography>
              </Box>
            </Stack>
            <Box>
              <Button
                sx={{
                  backgroundColor: '#0F0F0F',
                  color: '#fff',
                  padding: '0 16px',
                  height: '36px',
                  fontSize: '14px',
                  lineHeight: '36px',
                  borderRadius: '18px',
                  cursor: 'pointer',
                  textTransform: 'none',

                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                <Typography sx={{ fontWeight: '500' }} variant="body2">
                  {t('đangky')}
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                lg: 'flex',
              },
              alignItems: 'center',
              width: '50%',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Button
                sx={{
                  color: '#0F0F0F',
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  padding: '0 12px',
                  height: '36px',
                  fontSize: '14px',
                  lineHeight: '36px',
                  borderRadius: '18px 0 0 18px',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  cursor: 'pointer',
                }}
              >
                <ThumbUpOutlinedIcon
                  size="small"
                  sx={{
                    marginRight: '6px',
                    marginLeft: '-6px',
                    width: '24px',
                    height: '24px',
                  }}
                />
                <Typography
                  sx={{
                    pl: '4px',
                    fontSize: '14px',
                    lineHeight: '1.4',
                  }}
                  variant="body2"
                >
                  1,9N
                </Typography>
              </Button>
              <Button
                sx={{
                  color: '#0F0F0F',
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  padding: '0 12px',
                  height: '36px',
                  fontSize: '14px',
                  lineHeight: '36px',
                  borderRadius: '0 18px 18px 0',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  cursor: 'pointer',
                  borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                <ThumbDownAltOutlinedIcon
                  size="small"
                  sx={{
                    marginRight: '6px',
                    marginLeft: '-6px',
                    width: '24px',
                    height: '24px',
                  }}
                />
              </Button>
            </Box>
            <Button
              sx={{
                color: '#0F0F0F',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                padding: '0 12px',
                height: '36px',
                fontSize: '14px',
                lineHeight: '36px',
                borderRadius: '18px',
                fontFamily: 'Roboto, Arial, sans-serif',
                cursor: 'pointer',
                borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
                textTransform: 'none',
              }}
            >
              <ReplyIcon
                sx={{
                  marginRight: '6px',
                  marginLeft: '-6px',
                  width: '24px',
                  height: '24px',
                }}
              />
              <Typography
                sx={{
                  pl: '4px',
                  fontSize: '14px',
                  lineHeight: '1.4',
                  fontWeight: '500',
                }}
                variant="body2"
              >
                {t('chiase')}
              </Typography>
            </Button>
            <Box
              sx={{
                color: '#0F0F0F',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '50%',
                height: '36px',
                width: '36px',
                fontFamily: 'Roboto, Arial, sans-serif',
                cursor: 'pointer',
                textTransform: 'none',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MoreHorizIcon
                sx={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            mt: '18px',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '12px',
            padding: '12px 0px',
          }}
        >
          <Stack
            sx={{
              padding: '0 12px',
            }}
            direction="column"
          >
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#0f0f0f',
                  fontSize: '14px',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.4',
                  marginRight: '10px',
                }}
              >
                {selectedVideo?.views} lượt xem
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#0f0f0f',
                  fontSize: '14px',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.4',
                }}
              >
                3 {t('tuantruoc')}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#065fd4',
                  fontSize: '14px',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.4',
                  marginBottom: '10px',
                }}
              >
                #TheBROS #SoulofTheForest #FlamingoDaiLai #acoustic #cover
                #coversong #coversongs #maitiendung
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#0f0f0f',
                  fontSize: '14px',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.4',
                }}
              >
                {t('hienthem')}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default DetailVideo;
