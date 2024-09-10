'use client';

import { motion } from 'framer-motion';
import { paraAnim, titleAnim } from './framer';

function Hero() {
  return (
    <div className="mx-4 mt-[66px] text-center md:mx-10 xl:mx-0">
      <motion.h1
        {...titleAnim}
        className="text-[36px] font-bold leading-tight text-design-700 md:text-xl xl:text-2xl"
      >
        Design solutions made easy
      </motion.h1>
      <motion.p
        {...paraAnim}
        className="mt-[23px] text-base text-design-800 md:mx-auto md:max-w-[573px] xl:mx-auto xl:max-w-[730px] 2xl:mx-auto 2xl:max-w-[730px]"
      >
        With over ten years of experience in various design disciplines,
        I&apos;m your one-stop shop for your design needs.
      </motion.p>
    </div>
  );
}

export default Hero;
