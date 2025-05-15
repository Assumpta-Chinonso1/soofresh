// src/components/Explore/Explore.js

import './Explore.css';
import React, { useRef } from 'react';
import { assets, menu_lists } from '../../assets/assests';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const Explore = () => {
  const ScrollRef = useRef(null);

  const scroll = (direction) => {
    const container = ScrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="exploremenu">
      <br /><br /><br />
      <div className="exploremenu-top">
        <h1>
          Explore Our <span className="menu-gradient">Varieties</span>
        </h1>
        <span className="menu-label">
          Our Menu <ArrowRightIcon className="menu-arrow" />
        </span>
      </div>

      <div className="explore-menu-lists">
        <button className="scroll-arrow-left" onClick={() => scroll('left')}>
          <ArrowLeftIcon className="arrow-left" />
        </button>

        <div className="explore-menu-item" ref={ScrollRef}>
          {menu_lists.map((item, index) => (
            <div key={index} className="explore-menu-list">
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
              
              <h2>
                From  <span className="menu">{item.menu_price}</span>
              </h2>
            </div>
          ))}
        </div>

        <button className="scroll-arrow-right" onClick={() => scroll('right')}>
          <ArrowRightIcon className="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default Explore;
