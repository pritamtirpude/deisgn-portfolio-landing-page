'use client';

import Image from 'next/image';
import amyImg from '../../../public/assets/images/image-amy.webp';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { profileImgAnim, profileInfoAnim, profileParaAnim } from './framer';

function ProfileSection() {
  return (
    <section className="relative mx-4 mt-[100px] flex flex-col items-center overflow-hidden sm:gap-10 sm:text-center md:mx-10 md:mt-[120px] md:flex-row lg:mx-10 lg:flex-row xl:mx-auto xl:mt-[136px] xl:max-w-6xl xl:flex-row 2xl:mx-auto 2xl:mt-[136px] 2xl:max-w-6xl 2xl:flex-row">
      <motion.div
        {...profileImgAnim}
        className="flex-1 md:absolute md:-left-20"
      >
        <Image
          priority
          src={amyImg}
          alt="Amy"
          className="size-[300px] md:size-[364px] lg:size-[445px] xl:size-[445px] 2xl:size-[445px]"
        />
      </motion.div>
      <div className="ml-auto flex-1 md:max-w-[340px]">
        <motion.h2
          {...profileInfoAnim}
          className="text-[26px] font-bold text-design-700 md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"
        >
          I&apos;m Amy, and I&apos;d love to work on your next project
        </motion.h2>
        <motion.p
          {...profileParaAnim}
          className="mt-6 text-[16px] text-design-800 md:text-base lg:mt-[34px] lg:text-base xl:mt-[34px] xl:text-base 2xl:mt-[34px] 2xl:text-base"
        >
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </motion.p>
        <Button className="mt-6" color="pink" />
      </div>
    </section>
  );
}

export default ProfileSection;
