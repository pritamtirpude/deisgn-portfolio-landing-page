export const profileImgAnim = {
  initial: {
    opacity: 0,
    scaleY: 0.8
  },
  whileInView: {
    opacity: 1,
    scaleY: 1
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 0.3,
    stiffness: 100,
    delay: 0.5,
    damping: 50
  }
};

export const profileInfoAnim = {
  initial: {
    opacity: 0,
    y: -50
  },
  whileInView: {
    opacity: 1,
    y: 1
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 0.3,
    stiffness: 100,
    delay: 0.6,
    damping: 50
  }
};

export const profileParaAnim = {
  initial: {
    opacity: 0,
    y: 50
  },
  whileInView: {
    opacity: 1,
    y: 1
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 0.3,
    stiffness: 100,
    delay: 0.7,
    damping: 50
  }
};
