import React, { useState, useRef, useEffect } from 'react';
import '../styles/dropdown.css';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { id: 1, text: 'linkedin', href: 'https://www.linkedin.com/in/gkalian/' },
    { id: 2, text: 'github', href: 'https://github.com/gkalian' },
    { id: 3, text: 'steam', href: 'https://steamcommunity.com/id/gkalian' },
    { id: 4, text: 'elder scrolls', href: 'https://www.haemprojects.com/' },
  ];

  return (
    <div className="dropdown" ref={dropdownRef}>
      <span 
        className="grid-circleText" 
        onClick={toggleDropdown}
      >
        there
      </span>
      
      {isOpen && (
        <div className="dropdown-content">
          {menuItems.map((item, index) => (
            <a 
              key={item.id} 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                '--delay': index + 1
              } as React.CSSProperties}
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
