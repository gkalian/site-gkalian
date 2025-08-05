import React from 'react';
import '../styles/grid-layout.css';
import Dropdown from './Dropdown';

const GridLayout: React.FC = () => {

  return (
    <div className="grid-container">
      <div className="grid-main">
        <hr className="grid-hr" />

        <section className="grid-section">
          <div className="grid-dot"></div>
          <div className="grid-dot"></div>
          <div className="grid-dot"></div>
          <div className="grid-dot"></div>

            <h1 className="grid-heading">
              <span className="grid-textGradient">nothing to see</span>
              <br />
              <Dropdown/>
              <span className="grid-textGradient"> yet</span>
            </h1>
        </section>

        <hr className="grid-hr" />
      </div>
    </div>
  );
};

export default GridLayout;
