export const titleAnim = {
  initial: { y: 50, opacity: 0, scaleY: 0.8 },
  whileInView: {
    y: 0,
    opacity: 1,
    scaleY: 1
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 0.3,
    stiffness: 100,
    delay: 0.3,
    damping: 50
  }
};

export const paraAnim = {
  initial: { y: 50, opacity: 0, scaleY: 0.8 },
  whileInView: {
    y: 0,
    opacity: 1,
    scaleY: 1
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 0.3,
    stiffness: 100,
    delay: 0.4,
    damping: 50
  }
};
