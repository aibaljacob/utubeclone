import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';
import SearchResults from './components/SearchResults';
import { mockVideos, mockCategories } from './mockData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Recommended');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [menuOpen, setMenuOpen] = useState(true);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedVideo(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedVideo(null);
    setSelectedCategory('Search Results');
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const filteredVideos = searchQuery 
    ? mockVideos.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channel.toLowerCase().includes(searchQuery.toLowerCase()))
    : selectedCategory === 'Recommended' 
      ? mockVideos 
      : mockVideos.filter(video => video.category === selectedCategory);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header onSearch={handleSearch} onMenuToggle={toggleMenu} />
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar 
          categories={mockCategories} 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
          open={menuOpen}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>
          {selectedVideo ? (
            <VideoPlayer video={selectedVideo} recommendedVideos={mockVideos.filter(v => v.id !== selectedVideo.id).slice(0, 8)} onVideoSelect={handleVideoSelect} />
          ) : (
            <Container maxWidth="xl">
              <SearchResults 
                videos={filteredVideos} 
                title={selectedCategory} 
                onVideoSelect={handleVideoSelect} 
              />
            </Container>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default App;