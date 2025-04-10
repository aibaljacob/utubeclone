import React from 'react';
import { Box, Grid, Typography, Avatar, Button, Divider, Paper, Stack } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCard from './VideoCard';
import { formatDistanceToNow } from 'date-fns';

const VideoPlayer = ({ video, recommendedVideos, onVideoSelect }) => {
  return (
    <Grid container spacing={3}>
      <Grid size={{xs:12,md:8}}>
        <Paper 
          elevation={0} 
          sx={{ 
            position: 'relative', 
            paddingTop: '56.25%', // 16:9 aspect ratio
            backgroundColor: 'black',
            mb: 2
          }}
        >
          <Box sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <Typography variant="h6">Video Player</Typography>
          </Box>
        </Paper>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
          {video.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {video.views.toLocaleString()} views • {formatDistanceToNow(new Date(video.uploadDate))} ago
          </Typography>
          
          <Stack direction="row" spacing={1}>
            <Button startIcon={<ThumbUpIcon />} size="small">
              {video.likes ? video.likes.toLocaleString() : '0'}
            </Button>
            <Button startIcon={<ThumbDownIcon />} size="small">
              Dislike
            </Button>
            <Button startIcon={<ShareIcon />} size="small">
              Share
            </Button>
            <Button startIcon={<PlaylistAddIcon />} size="small">
              Save
            </Button>
            <Button startIcon={<MoreHorizIcon />} size="small" />
          </Stack>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Avatar sx={{ width: 48, height: 48, mr: 2 }}>
            {video.channel.charAt(0)}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {video.channel}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {video.subscribers ? video.subscribers.toLocaleString() : '1M'} subscribers
            </Typography>
          </Box>
          <Button variant="contained" color="error" sx={{ textTransform: 'none' }}>
            Subscribe
          </Button>
        </Box>
        
        <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
          <Typography variant="body2">
            {video.description || 'No description available for this video.'}
          </Typography>
        </Paper>
      </Grid>
      
      <Grid size={{xs:12,md:4}}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Up next
        </Typography>
        <Stack spacing={2}>
          {recommendedVideos.map((recVideo) => (
            <Box key={recVideo.id}>
              <VideoCard video={recVideo} onVideoSelect={onVideoSelect} />
            </Box>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default VideoPlayer;