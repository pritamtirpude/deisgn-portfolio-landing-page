'use client';

import Button from '../Button/Button';
import NavAndFooter from '../NavAndFooter/NavAndFooter';
import { motion } from 'framer-motion';
import { footerDivAnim, footerH1Anim, footerParaAnim } from './framer';

function FooterSection() {
  return (
    <footer className="mb-8 overflow-hidden md:mb-14 lg:mb-16 xl:mb-16 2xl:mb-16">
      <motion.div
        {...footerDivAnim}
        className="mx-4 mt-[100px] rounded-md bg-design-700 px-6 py-12 md:mx-10  md:mt-[120px] md:px-[75px] md:py-[56px] lg:mx-10  lg:mt-[88px] lg:px-[65px] lg:py-[80px] xl:mx-auto  xl:mt-[88px] xl:max-w-6xl xl:px-[65px] xl:py-[80px] 2xl:mx-auto  2xl:mt-[88px] 2xl:max-w-6xl 2xl:px-[65px] 2xl:py-[80px]"
      >
        <div className="flex flex-col items-center overflow-hidden sm:gap-6 sm:text-center  md:gap-[26px]  md:text-center lg:flex-row xl:flex-row 2xl:flex-row">
          <div className="flex-1 lg:max-w-[540px] xl:max-w-[540px] 2xl:max-w-[540px]">
            <motion.h4
              {...footerH1Anim}
              className="text-[26px] font-bold text-design-900 md:text-xl lg:text-xl xl:text-xl 2xl:text-xl"
            >
              Book a call with me
            </motion.h4>
            <motion.p
              {...footerParaAnim}
              className="mt-6 text-[16px] text-design-900 md:text-base lg:text-base xl:text-base 2xl:text-base"
            >
              I&apos;d love to have a chat to see how I can help you. The best
              first step is for us to discuss your project during a free
              consultation. Then we can move forward from there.
            </motion.p>
          </div>

          <div className="md:ml-0 lg:ml-auto xl:ml-auto 2xl:ml-auto">
            <Button color="pink" />
          </div>
        </div>
      </motion.div>
      <NavAndFooter className="mt-14" />
    </footer>
  );
}

export default FooterSection;
