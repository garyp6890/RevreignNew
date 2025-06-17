export const ROUTES = {
  HOME: '/',
  LINKS: '/links',
  AMAZON: '/amazon',
  WALMART: '/walmart',
  PARTNERSHIPS: '/partnerships',
  MERCHANDISE: '/merchandise',
  PAGE: '/page/:slug',
  ADMIN: '/admin/'
} as const;

export const SOCIAL_LINKS = {
  TIKTOK: 'https://tiktok.com/@revreignofficial',
  INSTAGRAM: 'https://instagram.com/revreignauto',
  YOUTUBE: 'https://youtube.com/@revreign',
  EMAIL: 'mailto:revreignauto@gmail.com'
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
} as const;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
} as const;

export const Z_INDEX = {
  DROPDOWN: 10,
  MODAL: 20,
  HEADER: 30,
  TOOLTIP: 40,
  OVERLAY: 50
} as const;