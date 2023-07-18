'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function MyCarousel() {
  return (
    <div className="w-2/3 m-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
        stopOnHover={false}
        emulateTouch
      >
        <div>
          <img src="/img1.jpg" alt="gg" />
        </div>
        <div>
          <img src="/img2.jpg" alt="gg" />
        </div>
        <div>
          <img src="/img3.jpg" alt="gg" />
        </div>
      </Carousel>
    </div>
  );
}
