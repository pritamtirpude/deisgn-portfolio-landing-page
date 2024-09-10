'use client';

import Image from 'next/image';
import imgOne from '../../../public/assets/images/image-slide-1.jpg';
import imgTwo from '../../../public/assets/images/image-slide-2.jpg';
import imgThree from '../../../public/assets/images/image-slide-3.jpg';
import imgFour from '../../../public/assets/images/image-slide-4.jpg';
import imgFive from '../../../public/assets/images/image-slide-5.jpg';
import arrowLeft from '../../../public/assets/images/icon-arrow-left.svg';
import arrowRight from '../../../public/assets/images/icon-arrow-right.svg';
import { cn } from '@/utils/util';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const images = [imgOne, imgTwo, imgThree, imgFour, imgFive];

function MyWorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [dragging, setDragging] = useState(false);

  const carousel = useRef<HTMLDivElement | null>(null);

  const handleDragStart = () => setDragging(true);
  const handleDragEnd = () => setDragging(false);

  const handleNext = () => {
    if (!dragging) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (!dragging) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth);
    }
  }, []);

  return (
    <section className="relative mt-[100px] flex flex-col gap-8 overflow-hidden md:mt-[120px] md:gap-14  lg:mt-[88px]  lg:gap-14 xl:mt-[88px]  xl:gap-14 2xl:mx-auto  2xl:mt-[88px] 2xl:max-w-6xl 2xl:gap-14">
      <div className="text-center">
        <h3 className="text-[24px] font-bold text-design-700 md:text-lg lg:text-lg xl:text-lg 2xl:text-lg ">
          My Work
        </h3>
      </div>

      <motion.div
        ref={carousel}
        className="overflow-hidden"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className="flex gap-[30px]"
          drag="x"
          animate={{ x: -currentIndex * 320 }}
          dragConstraints={{ right: 0, left: -width }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {images.map((img, i) => {
            return (
              <motion.div
                key={i}
                className="min-h-[360px] min-w-[300px] md:min-w-[550px] lg:min-w-[480px] xl:min-w-[480px] 2xl:min-w-[480px]"
              >
                <Image
                  className={cn(
                    'size-full pointer-events-none object-cover rounded-md'
                  )}
                  src={img}
                  placeholder="blur"
                  priority
                  alt={`image ${i}`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <div className="mx-auto flex items-center gap-4">
        <button
          className="flex size-16 items-center justify-center rounded-full bg-design-700 transition-colors hover:bg-design-100"
          onClick={handlePrev}
        >
          <Image src={arrowLeft} alt="left arrow" />
        </button>
        <button
          className="flex size-16 items-center justify-center rounded-full bg-design-700 transition-colors hover:bg-design-100"
          onClick={handleNext}
        >
          <Image src={arrowRight} alt="right arrow" />
        </button>
      </div>
    </section>
  );
}

export default MyWorkSection;
