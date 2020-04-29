export const defaultStyles = {
  animation: 'all .4s ease',
  indent: 15,
  buttonSize: 3,
  borderRadius: 3,
  mediumFontSize: '14px',
};

export const setDefaultStyles = (newStyles) => {
  Object.keys(newStyles).forEach((style) => {
    defaultStyles[style] = newStyles[style];
  });
};
