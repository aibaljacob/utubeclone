import React, { useState } from 'react';
import { 
  AppBar, Toolbar, IconButton, Typography, InputBase, Badge, 
  Avatar, Box, styled, alpha 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicIcon from '@mui/icons-material/Mic';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  border: '1px solid #ccc',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

const Header = ({ onSearch, onMenuToggle }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: '1px solid #ddd' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box component="img" src="../assets/youtube.png" alt="YouTube Logo" sx={{ height: 30 }} />
        </Typography>
        
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', width: '100%', maxWidth: 600 }}>
            <Search sx={{ flexGrow: 1 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
              />
            </Search>
            <IconButton type="submit" sx={{ p: '10px', backgroundColor: '#F0F0F0', borderRadius: 0, border: '1px solid #ccc', borderLeft: 'none' }}>
              <SearchIcon />
            </IconButton>
          </form>
          <IconButton color="inherit" sx={{ ml: 1, backgroundColor: '#F0F0F0', borderRadius: '50%' }}>
            <MicIcon />
          </IconButton>
        </Box>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton edge="end" color="inherit">
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
