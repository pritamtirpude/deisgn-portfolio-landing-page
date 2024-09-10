export const footerDivAnim = {
  initial: {
    opacity: 0
  },
  whileInView: {
    opacity: 1
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 0.3,
    delay: 0.3
  }
};

export const footerH1Anim = {
  initial: {
    opacity: 0,
    y: '-100%'
  },
  whileInView: {
    opacity: 1,
    y: 0
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

export const footerParaAnim = {
  initial: {
    opacity: 0,
    y: -50
  },
  whileInView: {
    opacity: 1,
    y: 0
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
