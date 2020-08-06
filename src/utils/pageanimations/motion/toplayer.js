
let easing = [0.6, 0.05, 0.01, 0.99];

export const logoAnim = {
  initial: {
    opacity: 0
  },
  initAnimate: {
    opacity: 0
  },
  initialOne:{
    opacity: 0.7 
  },
  initialTwo: {
    opacity: 0.7
  },
  topAnimation: {
    opacity: 0,
    transition: {
      delay: 0.35,
      duration: .15,
    }
  },
  bottomAnimation: {
    opacity: 0,
    transition: {
      delay: 0.35,
      duration: .25,
    }
  },
  topExit: {
    opacity: 0.7, 
    transition: {
      delay: .7,
      duration: .1,
      ease: easing
    }
  },
  bottomExit: {
    opacity: 0.7, 
    transition: {
      delay: .1,
      duration: .05,
      ease: easing
    }
  }
}


export const topAnim = {
  initial: {
    width: '0%',
    right: 0
  },
  initAnimate: {
    width: '0%',
  },
  initialOne: {
    width: '100%',
    left: 0
  },
  initialTwo: {
    width: '100%',
    right: 0
  },
  topAnimation: {
    width: '0%',
    float: 'right',
    // right: 0,
    transition: {
      delay: 0.4,
      duration: .6,
      ease: easing
    }
  },
  bottomAnimation: {
    width: '0%',
    float: 'right',
    // right: 0,
    transition: {
      delay: .4,
      duration: .6,
      ease: easing
    }
  },
  topExit: {
    width: '100%',
    left: 0,
    transition: {
      delay: 0.5,
      duration: .4,
      ease: easing
    }
  },
  bottomExit: {
    width: '100%',
    left: 0,
    transition: {
      // delay: ,
      duration: .5,
      ease: easing
    }
  }
}
