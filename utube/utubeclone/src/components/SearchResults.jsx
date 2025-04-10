import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import VideoCard from './VideoCard';

const SearchResults = ({ videos, title, onVideoSelect }) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {videos.length > 0 ? (
          videos.map((video) => (
            <Grid size={{xs:12,sm:6,md:4,lg:3}} key={video.id}>
              <VideoCard video={video} onVideoSelect={onVideoSelect} />
            </Grid>
          ))
        ) : (
          <Grid xs={12}>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              No videos found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default SearchResults;