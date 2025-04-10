import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Avatar, Stack } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';

const VideoCard = ({ video, onVideoSelect }) => {
  return (
    <Card 
      elevation={0} 
      sx={{ backgroundColor: 'transparent', cursor: 'pointer' }}
      onClick={() => onVideoSelect(video)}
    >
      <CardMedia
        component="img"
        image={video.thumbnail || `/api/placeholder/320/180?text=${encodeURIComponent(video.title)}`}
        alt={video.title}
        sx={{ 
          borderRadius: 1,
          height: 0,
          paddingTop: '56.25%', // 16:9 aspect ratio
        }}
      />
      <CardContent sx={{ px: 0, pb: 0, pt: 1 }}>
        <Box sx={{ display: 'flex' }}>
          <Avatar sx={{ width: 36, height: 36, mr: 1.5 }}>
            {video.channel.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" component="div" sx={{ 
              fontWeight: 500,
              fontSize: '1rem',
              lineHeight: 1.2,
              mb: 0.5,
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}>
              {video.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {video.channel}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {video.views.toLocaleString()} views • {formatDistanceToNow(new Date(video.uploadDate))} ago
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;