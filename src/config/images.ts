
export const IMAGE_PATHS = {
  HEROES: {
    ICARDS: '/images/projects/icards.webp',
    ORGANITZ_MOBILE: '/images/projects/organitzMobile.webp',
    INGENITIV: '/images/projects/ingenitiv.png',
  },

  LOGOS: {
    ICARDS: '/images/projects/icards.webp',
    ORGANITZ_MOBILE: '/images/projects/chess-app/logo.png',
    INGENITIV: '/images/projects/uncharted/logo.png',
  },

};

export const getImagePath = (primaryPath: string): string => {
  return primaryPath;
};
