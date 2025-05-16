import './Explore.css';
import React, { useRef, useEffect, useState } from 'react';
import { assets, menu_lists } from '../../assets/assests';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const Explore = () => {
  const ScrollRef = useRef(null);
  const scrollInterval = useRef(null);
  const [direction, setDirection] = useState('right');

  const ITEM_WIDTH = 250; // adjust based on your card size

  const scroll = (dir) => {
    const container = ScrollRef.current;
    if (!container) return;

    const newScrollLeft =
      dir === 'left'
        ? container.scrollLeft - ITEM_WIDTH
        : container.scrollLeft + ITEM_WIDTH;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'auto', // INSTANT and FORCEFUL!
    });
  };

  const autoScroll = () => {
    const container = ScrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    // ⚠️ At right end, reverse direction to left
    if (scrollLeft + clientWidth >= scrollWidth - ITEM_WIDTH) {
      setDirection('left');
    }
    // ⚠️ At left end, reverse direction to right
    else if (scrollLeft <= 0) {
      setDirection('right');
    }

    scroll(direction);
  };

  useEffect(() => {
    scrollInterval.current = setInterval(autoScroll, 2000);

    return () => {
      clearInterval(scrollInterval.current);
    };
  }, [direction]);

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
                From <span className="menu">{item.menu_price}</span>
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