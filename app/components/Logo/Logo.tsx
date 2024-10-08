'use client';

import { motion } from 'framer-motion';
import { logoAnim } from './framer';

function Logo() {
  return (
    <motion.svg
      {...logoAnim}
      width="64"
      height="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path fill="#030303" d="M0 0h64v64H0z" className="size-12" />
        <circle stroke="#FFF7F0" strokeWidth="4" cx="32" cy="32" r="14" />
      </g>
    </motion.svg>
  );
}

export default Logo;
