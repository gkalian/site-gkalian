import React, { useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import GridLayout from './components/GridLayout';
import Footer from './components/Footer';
import './styles/global.css';

const App: React.FC = () => {
  // Handle theme changes from the toggle
  const handleThemeChange = (darkMode: boolean) => {
    const updateTheme = () => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Use View Transitions API if available
    if (document.startViewTransition) {
      document.documentElement.style.setProperty('--x', '50%');
      document.documentElement.style.setProperty('--y', '50%');
      
      const transition = document.startViewTransition(updateTheme);
      transition.finished.catch((error) => {
        console.error('View Transition error:', error);
      });
    } else {
      updateTheme();
    }
  };

  // Set initial theme based on system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    handleThemeChange(mediaQuery.matches);
    
    // Listen for system theme changes
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      handleThemeChange(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  return (
    <>
      <ThemeToggle onThemeChange={handleThemeChange} />
      <GridLayout />
      <Footer />
    </>
  );
};

export default App;
