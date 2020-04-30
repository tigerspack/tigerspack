export const defaultStyles = {
  animation: 'all .4s ease',
  indent: 15,
  buttonSize: 3,
  cardSize: 3,
  borderRadius: 3,
  boxShadow: 3,
};

export const setDefaultStyles = (newStyles) => {
  Object.keys(newStyles).forEach((style) => {
    defaultStyles[style] = newStyles[style];
  });
};
