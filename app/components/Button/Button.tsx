'use client';

import { cn } from '@/utils/util';
import { motion } from 'framer-motion';
import { buttonAnim } from './framer';

function Button({ color, className }: { color: string; className?: string }) {
  return (
    <motion.div className="overflow-hidden" {...buttonAnim}>
      <button
        className={cn(
          'capitalize overflow-hidden px-[45px] py-[14px] transition-all text-sm   text-design-900 font-bold rounded-[32px]',
          color === 'black' && 'bg-design-700 hover:bg-design-100',
          color === 'pink' && 'bg-design-400 hover:bg-design-200',
          className
        )}
      >
        free consultation
      </button>
    </motion.div>
  );
}

export default Button;
