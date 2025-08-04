import React from 'react';
import { Box, Container } from '@mui/material';

interface SocialLink {
  url: string;
  title: string;
}

const socialLinks: SocialLink[] = [
  { url: "mailto:gkalian.ik@gmail.com", title: "E-mail" },
  { url: "https://www.haemprojects.com/", title: "Official site" },
  { url: "https://twitter.com/gkalian", title: "Twitter" },
  { url: "https://www.instagram.com/gkalian", title: "Instagram" },
  { url: "https://www.youtube.com/user/TheGKalian", title: "Youtube" },
  { url: "https://steamcommunity.com/id/gkalian", title: "Steam" },
  { url: "https://open.spotify.com/user/zpz9dr3q0jk0rx0x38vvbn70p", title: "Spotify" },
  { url: "https://www.last.fm/user/gkalian", title: "Last Fm" },
  { url: "https://www.myshows.ru/gkalian", title: "MyShows" },
  { url: "https://www.deviantart.com/gkalian", title: "DeviantArt" },
  { url: "https://www.flickr.com/photos/gkalian", title: "Flickr" }
];

const Main: React.FC = () => {
  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '90vh',
        backgroundColor: '#f0ffffa1'
      }}
    >
      <Box 
        sx={{ 
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <ul className="social-list">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} title={link.title} target="_blank" rel="noopener noreferrer">
                <span></span>
              </a>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default Main;
