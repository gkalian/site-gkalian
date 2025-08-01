import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/styles.css';
import './styles/icons.css';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f0ffffa1',
    },
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundColor: '#f0ffffa1'
      }}>
        <Main />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
