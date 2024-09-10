'use client';

import graphicDesignSvg from '../../../public/assets/images/pattern-graphic-design.svg';
import uiuxSvg from '../../../public/assets/images/pattern-ui-ux.svg';
import appsSvg from '../../../public/assets/images/pattern-apps.svg';
import illustrationSvg from '../../../public/assets/images/pattern-illustrations.svg';
import photographySvg from '../../../public/assets/images/pattern-photography.svg';
import motionGraphicsSvg from '../../../public/assets/images/pattern-motion-graphics.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  appsAnim,
  graphicAnim,
  illustrationAnim,
  motionAnim,
  photoAnim,
  UIUXAnim
} from './framer';

function DesignServices() {
  return (
    <section className="mx-4 mt-8 grid gap-6 overflow-hidden md:mx-10 md:mt-16 lg:mx-10 lg:mt-20 lg:max-w-6xl lg:grid-cols-6 xl:mx-auto xl:mt-20 xl:max-w-6xl xl:grid-cols-6 2xl:mx-auto 2xl:mt-20 2xl:max-w-6xl 2xl:grid-cols-6">
      <motion.div
        {...graphicAnim}
        className="flex w-full flex-col rounded-md bg-design-100 p-6 sm:col-span-2  md:row-span-2 lg:col-span-2  lg:row-span-6 xl:col-span-2  xl:row-span-6 2xl:col-span-2  2xl:row-span-6"
      >
        <Image
          src={graphicDesignSvg}
          className="ml-auto"
          alt="graphic design card"
        />
        <h2 className="mt-auto text-[24px] capitalize text-white">
          graphic design
        </h2>
      </motion.div>

      <motion.div
        {...UIUXAnim}
        className="flex w-full flex-col gap-10 rounded-md bg-design-200 p-6 sm:row-start-2  md:col-start-2 lg:row-span-4 xl:row-span-4 2xl:row-span-4"
      >
        <Image src={uiuxSvg} alt="UI/UX card" className="ml-auto" />
        <h2 className="mt-auto text-[24px] text-white">UI/UX</h2>
      </motion.div>

      <motion.div
        {...appsAnim}
        className="flex w-full flex-col rounded-md bg-design-300 p-6 sm:col-start-2 sm:row-start-2 md:col-start-3 lg:col-start-4 lg:row-span-4 xl:col-start-4 xl:row-span-4 2xl:col-start-4 2xl:row-span-4"
      >
        <Image src={appsSvg} className="ml-auto" alt="apps card" />
        <h2 className="mt-auto text-[24px] capitalize text-white">apps</h2>
      </motion.div>

      <motion.div
        {...illustrationAnim}
        className="flex w-full flex-col rounded-md bg-design-400 p-6 sm:col-span-2 sm:gap-4 md:col-span-2 md:col-start-2 md:row-start-2 lg:col-span-2 lg:col-start-3 lg:row-span-2 xl:col-span-2 xl:col-start-3 xl:row-span-2 2xl:col-span-2 2xl:col-start-3 2xl:row-span-2"
      >
        <Image
          src={illustrationSvg}
          className="ml-auto"
          alt="illustration card"
        />
        <h2 className="mt-auto text-[24px] capitalize text-white">
          illustrations
        </h2>
      </motion.div>

      <motion.div
        {...photoAnim}
        className="flex w-full flex-col rounded-md bg-design-500 p-6 sm:col-span-2 sm:gap-10 md:gap-10 lg:col-span-2 lg:col-start-5 lg:row-span-4 lg:row-start-1 xl:col-span-2 xl:col-start-5 xl:row-span-4 xl:row-start-1 2xl:col-span-2 2xl:col-start-5 2xl:row-span-4 2xl:row-start-1"
      >
        <Image
          src={photographySvg}
          className="ml-auto"
          alt="photography card"
        />
        <h2 className="mt-auto text-[24px] capitalize text-white">
          photography
        </h2>
      </motion.div>

      <motion.div
        {...motionAnim}
        className="flex w-full flex-col rounded-md bg-design-600 p-6 sm:col-span-2 sm:gap-10 md:col-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2 2xl:col-span-2 2xl:row-span-2"
      >
        <Image
          src={motionGraphicsSvg}
          className="ml-auto"
          alt="motion graphics card"
        />
        <h2 className="mt-auto text-[24px] capitalize text-white">
          motion graphics
        </h2>
      </motion.div>
    </section>
  );
}

export default DesignServices;
