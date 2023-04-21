import React from "react";

const SampleCardMovie = React.forwardRef(() => {
  return (
    <Grid
      sx={{
        paddingTop: "0px",
      }}
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
      xl={3}
      key={video.id.concat(index)}
    >
      <VideoCard
        ref={loaderTop}
        key={video.id}
        video={video}
        idVideo={video.snippet.resourceId.videoId}
      />
    </Grid>
  );
});

export default SampleCardMovie;
