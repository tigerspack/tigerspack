export const colors = {
  primary: {
    color: '#3F88C5',
    text: '#fff',
    hoverColor: '#619DCF',
    hoverText: '#fff',
  },
  yellow: {
    color: '#FDE74C',
    text: '#304355',
    hoverColor: '#FDEF8D',
    hoverText: '#596977',
  },
  danger: {
    color: '#D15130',
    text: '#fff',
    hoverColor: '#E76846',
    hoverText: '#fff',
  },
  warning: {
    color: '#FA7921',
    text: '#fff',
    hoverColor: '#FB9D5D',
    hoverText: '#fff',
  },
  success: {
    color: '#9BC53D',
    text: '#fff',
    hoverColor: '#B6D471',
    hoverText: '#fff',
  },
  info: {
    color: '#5BC0EB',
    text: '#fff',
    hoverColor: '#87D1F0',
    hoverText: '#fff',
  },
  dark: {
    color: '#304355',
    text: '#fff',
    hoverColor: '#596977',
    hoverText: '#fff',
  },
  light: {
    color: '#E5E8EC',
    text: '#304355',
    hoverColor: '#EEF0F2',
    hoverText: '#596977',
  },
};

export const setColor = (scheme) => {
  Object.keys(scheme).forEach((theme) => {
    colors[theme] = { ...colors[theme], ...scheme[theme] };
  });
};
