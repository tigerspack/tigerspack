export const defaultStyles = {
  animation: 'all .4s ease',
  indent: 15,
  buttonSize: 3,
  borderRadius: '3px',
  smallPadding: '3px 6px',
  mediumPadding: '7.5px 15px',
  largePadding: '10px 20px',
  smallFontSize: '12px',
  mediumFontSize: '14px',
  largeFontSize: '18px',
};

export const setDefaultStyles = (newStyles) => {
  Object.keys(newStyles).forEach((style) => {
    defaultStyles[style] = newStyles[style];
  });
};
