import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSelectedVideo } from "../../../reducer/video/videoActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReplyIcon from "@mui/icons-material/Reply";
import Comments from "./Comments";
const DetailVideo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selectedVideo, isLoading } = useSelector((state) => state.videos);
  const [selectedVideoState, setSelectedVideoState] = useState(
    selectedVideo || null
  );
  console.log(id);

  useEffect(() => {
    dispatch(fetchSelectedVideo(id));
  }, []);

  return (
    <div>
      {isLoading ? (
        <Skeleton
          animation="pulse"
          sx={{
            height: "550px",
            position: "absolute",
            top: "0",
            width: "50%",
          }}
        />
      ) : (
        <Box>
          <iframe
            key={selectedVideo?.id?.videoId}
            src={`https://www.youtube.com/embed/${id}`}
            width="85%"
            height="360px"
            allowFullScreen={true}
            style={{ border: "none" }}
          ></iframe>
        </Box>
      )}
      <Box>
        <Typography
          variant="h5"
          sx={{
            wordBreak: "break-word",
            fontFamily: "YouTube Sans, Roboto, sans-serif",
            fontWeight: "550",
            fontSize: "1.2rem",
            // lineHeight: "2.5rem",
            marginTop: "12px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            maxHeight: "4,4rem",
          }}
        >
          Anh Say Rồi - Mai Tiến Dũng live at #souloftheforest
        </Typography>
      </Box>
      <Box
        sx={{
          width: "94%",
          display: "flex",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
          }}
        >
          <img
            src="https://yt3.ggpht.com/B6fTtYN-Wtm1Gi-VK4ZPdWof0vfEKYOvbax_HtfExRErG00seqMuCYR1YFQWH0x92KITAUAms4U=s88-c-k-c0x00ffffff-no-rj"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "12px",
            }}
          />
          <Stack
            direction="column"
            sx={{
              marginRight: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto, Arial , sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.4",
                  fontWeight: "450",
                }}
                variant="h6"
              >
                Soul of The Forest
              </Typography>
              <CheckCircleIcon
                sx={{
                  height: "14px",
                  width: "14px",
                  pl: "4px",
                  backgroundColor: "transparent",
                  opacity: "0.6",
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  whiteSpace: "nowrap",
                  color: "#606060",
                }}
              >
                273 N người đăng ký
              </Typography>
            </Box>
          </Stack>
          <Box>
            <Button
              sx={{
                backgroundColor: "#0F0F0F",
                color: "#fff",
                padding: "0 16px",
                height: "36px",
                fontSize: "14px",
                lineHeight: "36px",
                borderRadius: "18px",
                cursor: "pointer",
                textTransform: "none",

                WebkitTapHighlightColor: "transparent",
              }}
            >
              <Typography sx={{ fontWeight: "500" }} variant="body2">
                Đăng ký
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "40%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Button
              sx={{
                color: "#0F0F0F",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                padding: "0 12px",
                height: "36px",
                fontSize: "14px",
                lineHeight: "36px",
                borderRadius: "18px 0 0 18px",
                fontFamily: "Roboto, Arial, sans-serif",
                cursor: "pointer",
              }}
            >
              <ThumbUpOutlinedIcon
                size="small"
                sx={{
                  marginRight: "6px",
                  marginLeft: "-6px",
                  width: "24px",
                  height: "24px",
                }}
              />
              <Typography
                sx={{
                  pl: "4px",
                  fontSize: "14px",
                  lineHeight: "1.4",
                }}
                variant="body2"
              >
                1,9N
              </Typography>
            </Button>
            <Button
              sx={{
                color: "#0F0F0F",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                padding: "0 12px",
                height: "36px",
                fontSize: "14px",
                lineHeight: "36px",
                borderRadius: "0 18px 18px 0",
                fontFamily: "Roboto, Arial, sans-serif",
                cursor: "pointer",
                borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <ThumbDownAltOutlinedIcon
                size="small"
                sx={{
                  marginRight: "6px",
                  marginLeft: "-6px",
                  width: "24px",
                  height: "24px",
                }}
              />
            </Button>
          </Box>
          <Button
            sx={{
              color: "#0F0F0F",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              padding: "0 12px",
              height: "36px",
              fontSize: "14px",
              lineHeight: "36px",
              borderRadius: "18px",
              fontFamily: "Roboto, Arial, sans-serif",
              cursor: "pointer",
              borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
              textTransform: "none",
            }}
          >
            <ReplyIcon
              sx={{
                marginRight: "6px",
                marginLeft: "-6px",
                width: "24px",
                height: "24px",
              }}
            />
            <Typography
              sx={{
                pl: "4px",
                fontSize: "14px",
                lineHeight: "1.4",
                fontWeight: "500",
              }}
              variant="body2"
            >
              Chia sẻ
            </Typography>
          </Button>
          <Box
            sx={{
              color: "#0F0F0F",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              borderRadius: "50%",
              height: "36px",
              width: "36px",
              fontFamily: "Roboto, Arial, sans-serif",
              cursor: "pointer",
              textTransform: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MoreHorizIcon
              sx={{
                width: "24px",
                height: "24px",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: "18px",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          width: "81%",
          display: "flex",
          borderRadius: "12px",
          padding: "12px 16px",
        }}
      >
        <Stack direction="column">
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#0f0f0f",
                fontSize: "14px",
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: "500",
                lineHeight: "1.4",
                marginRight: "10px",
              }}
            >
              288N lượt xem
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#0f0f0f",
                fontSize: "14px",
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: "500",
                lineHeight: "1.4",
              }}
            >
              3 tuần trước
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#065fd4",
                fontSize: "14px",
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: "500",
                lineHeight: "1.4",
                marginBottom: "10px",
              }}
            >
              #TheBROS #SoulofTheForest #FlamingoDaiLai #acoustic #cover
              #coversong #coversongs #maitiendung
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#0f0f0f",
                fontSize: "14px",
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: "500",
                lineHeight: "1.4",
              }}
            >
              Hiện thêm
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Comments />
    </div>
  );
};

export default DetailVideo;
