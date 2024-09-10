export const buttonAnim = {
  initial: { y: -50, opacity: 0, scaleY: 0.8 },
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
    delay: 0.1,
    damping: 50
  }
};
