import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className ="footer">
      <div className="footer-text">
        gkalian | 2010 - {currentYear} | v.6
      </div>
    </div>
  );
};

export default Footer;
