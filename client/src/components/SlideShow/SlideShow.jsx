import React, { useState, useEffect } from 'react';

import './SlideShow.scss';
var index = 0;

export default function SlideShow({ children, imgWidth }) {
  const [slides, setSlides] = useState([]);
  const [slideshowWrap, setSlideshowWrap] = useState();

  const next = () => {
    if (index < slides.length - 1) index++;
    else index = 0;
    console.log('move');
    slideshowWrap.style.transform = `translateX(-${imgWidth * index}px)`;
  };

  const prev = () => {
    console.log(slides.length);
    if (index < 1) index = slides.length - 1;
    else index--;
    console.log(index);
    slideshowWrap.style.transform = `translateX(-${imgWidth * index}px)`;
  };

  useEffect(() => {
    setSlideshowWrap(document.querySelector('.slideshow-wrap'));
    setSlides(
      children.map((slide, i) => {
        return <Slide key={i} slide={slide} />;
      }),
    );
    return () => setSlides([]);
  }, []);

  return (
    <div className='slideshow-container'>
      <div className='control prev-btn' onClick={() => prev()}>
        <i class='fas fa-chevron-left'></i>
      </div>
      <div className='slideshow-wrap'>{slides}</div>
      <div className='control next-btn' onClick={() => next()}>
        <i class='fas fa-chevron-right'></i>
      </div>
    </div>
  );
}

const Slide = ({ slide }) => {
  return <div className='slide'>{slide}</div>;
};
