import React, { useEffect, useRef, useCallback } from 'react';
import '../styles/theme-toggle.css';

interface ThemeToggleProps {
  onThemeChange?: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onThemeChange }) => {
  const toggleRef = useRef<HTMLInputElement>(null);

  const handleThemeChange = useCallback((isDark: boolean) => {
    onThemeChange?.(isDark);
  }, [onThemeChange]);

  useEffect(() => {
    const prefersDark = true;
    if (toggleRef.current) {
      toggleRef.current.checked = prefersDark;
      handleThemeChange(prefersDark);
    }

    // Only add system theme listener if we want to support system preference
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (toggleRef.current) {
        const isDark = e.matches;
        toggleRef.current.checked = isDark;
        handleThemeChange(isDark);
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [handleThemeChange]);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleThemeChange(e.target.checked);
  };

  return (
    <label className="toggle">
      <input
        ref={toggleRef}
        type="checkbox"
        className="toggle-input"
        onChange={handleToggle}
        aria-label="Toggle dark mode"
      />
      <div className="toggle-visual" />
    </label>
  );
};

export default React.memo(ThemeToggle);