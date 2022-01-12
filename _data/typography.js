const colors = require('./colors.json');

const ON_BACKGROUND_COLOR = colors['On Background'].color;
const ON_SURFACE_COLOR = colors['On Surface']['On Surface'].color;
const ON_SURFACE_COLOR_2 = colors['On Surface']['On Surface Third'].color;
const ON_SURFACE_SECONDARY_COLOR = colors['On Surface']['On Surface Secondary'].color;
const FONT_FAMILY = 'Montserrat, Arial, sans-serif';

module.exports = {
  body: {
    'default': {
      'margin' : '0',
      'font-family': FONT_FAMILY,
      'color': ON_BACKGROUND_COLOR,
      'background-color': colors['Background'].color
    }
  },
  h1: {
    'default': {
      'margin' : '0',
      'padding' : `8px`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '24px',
      'font-weight': '600',
      'color': ON_SURFACE_COLOR
    },
    'phone' : {
      'font-size' : '48px',
    },
    'tablet' : {
      'font-size' : '60px',
    }
  },
  h2: {
    'default': {
      'margin' : '0',
      'padding' : `8px`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '36px',
      'font-weight': '600',
      'color': ON_SURFACE_COLOR
    },
    'phone' : {
      'font-size' : '55px',
    }
  },
  h3: {
    'default': {
      'margin' : '0',
      'padding' : `8px`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '22px',
      'font-weight': '400',
      'letter-spacing': '0.02em',
      'color': ON_SURFACE_COLOR
    },
    'phone' : {
      'font-size' : '27px',
    },
    'tablet' : {
      'letter-spacing': '0',
      'font-size' : '40px',
    }
  },
  p: {
    'default': {
      'margin' : '0',
      'padding' : `8px`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '14px',
      'font-weight': 400,
      'color': ON_SURFACE_COLOR_2
    },
    'phone' : {
      'font-size' : '22px',
    },
    'tablet' : {
      'font-size' : '26px',
    }
  },
  ul: {
    'default': {
      'margin' : '0',
      'padding' : `8px 8px 8px 16px`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '14px',
      'font-weight': 400,
      'color': ON_SURFACE_COLOR_2
    },
    'phone' : {
      'font-size' : '22px',
    },
    'tablet' : {
      'font-size' : '26px',
    }
  },
  '.p-small': {
    'default': {
      'margin' : '0',
      'padding' : `8px`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '14px',
      'color': ON_SURFACE_COLOR_2
    },
    'phone' : {
      'font-size' : '22px',
    },
    'tablet' : {
      'font-size' : '26px',
    }
  },
  ".button-1": {
    'default': {
      'padding' : `10px 30px`,
      'font-size' : '16px',
      'font-family': `${FONT_FAMILY}`,
      'font-weight': '600',
      'text-transform': 'uppercase'
    }
  },
  ".button-2": {
    'default': {
      'padding' : `10px 30px`,
      'font-size' : '16px',
      'font-family': `${FONT_FAMILY}`,
      'font-weight': '600',
      'text-transform': 'uppercase'
    }
  },
  ".main-menu__link": {
    'default': {
      'margin' : '0',
      'padding' : `10px 15px`,
      'font-family': `${FONT_FAMILY}`,
      'font-weight': '400',
      'font-size' : '14px',
      'line-height': '18px',
      'letter-spacing': '0',
      'letter-spacing': '0',
      'text-decoration': 'none',
      'text-transform': 'uppercase',
      'color': ON_SURFACE_COLOR
    },
    'phone' : {
      'font-size' : '16px',
      'line-height': '20px'
    },
    'tablet' : {
      'font-size' : '20px',
      'line-height': '23px'
    }
  },
  ".label": {
    'default': {
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '16px',
      'line-height': '24px',
      'color': ON_SURFACE_SECONDARY_COLOR
    }
  },
  ".value": {
    'default': {
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '16px',
      'line-height': '24px',
      'color': ON_SURFACE_COLOR
    }
  },
  ".label-small": {
    'default': {
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '14px',
      'line-height': '24px',
      'color': ON_SURFACE_SECONDARY_COLOR
    }
  },
}
