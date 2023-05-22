import React from 'react';
import { Grid, Skeleton } from '@mui/material';
const SampleCard = React.forwardRef(({ index }, ref) => {
  return (
    <Grid
      ref={ref}
      sx={{
        paddingTop: '0px',
      }}
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
      xl={3}
      key={index}
    >
      <Skeleton
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          },
          mb: '20px',
        }}
        animation="wave"
        variant="rect"
        // width="30%"
        height={250}
      />
    </Grid>
  );
});

export default SampleCard;
