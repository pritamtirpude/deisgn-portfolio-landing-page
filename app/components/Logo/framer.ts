export const logoAnim = {
  initial: { y: 50, opacity: 0, scale: 0.8 },
  whileInView: {
    y: 0,
    opacity: 1,
    scale: 1
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 0.3,
    stiffness: 100,
    damping: 50
  }
};
