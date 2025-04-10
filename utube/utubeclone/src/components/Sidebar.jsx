import React from 'react';
import { 
  Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, 
  Divider, Typography, Drawer,Avatar 
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const drawerWidth = 240;

const Sidebar = ({ categories, selectedCategory, onCategoryChange, open }) => {
  const primaryMenu = [
    { icon: <HomeIcon />, text: 'Recommended' },
    { icon: <SubscriptionsIcon />, text: 'Subscriptions' },
  ];
  
  const secondaryMenu = [
    { icon: <VideoLibraryIcon />, text: 'Library' },
    { icon: <HistoryIcon />, text: 'History' },
    { icon: <WatchLaterIcon />, text: 'Watch Later' },
    { icon: <ThumbUpIcon />, text: 'Liked Videos' },
  ];

  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          top: '64px',
          height: 'calc(100% - 64px)',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {primaryMenu.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={selectedCategory === item.text}
                onClick={() => onCategoryChange(item.text)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {secondaryMenu.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            SUBSCRIPTIONS
          </Typography>
          <List dense>
            {['Tech Channel', 'Music Videos', 'Gaming Pro', 'Cooking Tips', 'Travel Vlogs'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Avatar sx={{ width: 24, height: 24 }}>{text[0]}</Avatar>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            EXPLORE
          </Typography>
          <List dense>
            {categories.map((category) => (
              <ListItem key={category} disablePadding>
                <ListItemButton
                  selected={selectedCategory === category}
                  onClick={() => onCategoryChange(category)}
                >
                  <ListItemText primary={category} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;