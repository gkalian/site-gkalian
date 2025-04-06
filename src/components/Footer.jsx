import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        padding: '10px 0',
        backgroundColor: 'transparent'
      }}
    >
      <Typography className="footer-text" variant="body2">
        gkalian | 2010 - {currentYear} | v.5 forked{' '}
        <Link 
          href="https://codepen.io/MhmdNadyMhmd/pen/KGmYpw"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-heart"
        >
          <i className="fa fa-heart"></i>
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
