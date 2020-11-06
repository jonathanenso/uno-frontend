import React, { useState } from 'react';

import Aguila from '../../assets/img/landing/gifUno.gif';
import imagen1 from '../../assets/img/landing/1.png';
import imagen2 from '../../assets/img/landing/2.png';
import imagen3 from '../../assets/img/landing/3.png';
import imagen4 from '../../assets/img/landing/BannerHome4.jpg';



import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: Aguila,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: imagen1,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: imagen2,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: imagen3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: imagen4,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const LandingCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
       {/*  <CarouselCaption /> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default LandingCarousel;