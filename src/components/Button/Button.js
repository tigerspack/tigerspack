import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const Button = (props) => {
  const {
    children,
    icon,
    size,
    theme,
    type,
    ...otherProps
  } = props;
  const palette = colors[theme] ? colors[theme] : colors.primary;
  // Dynamic styles
  const dynamicStyles = {};
  switch (type) {
    case 'text': {
      dynamicStyles.background = 'transparent';
      dynamicStyles.backgroundHover = palette.color;
      dynamicStyles.border = '1px solid transparent';
      dynamicStyles.color = palette.color;
      dynamicStyles.colorHover = palette.hoverText;
      break;
    }
    case 'outline': {
      dynamicStyles.background = 'transparent';
      dynamicStyles.border = `1px solid ${palette.color}`;
      dynamicStyles.backgroundHover = palette.color;
      dynamicStyles.color = palette.color;
      dynamicStyles.colorHover = palette.hoverText;
      break;
    }
    default: {
      dynamicStyles.background = palette.color;
      dynamicStyles.border = '1px solid transparent';
      dynamicStyles.backgroundHover = palette.hoverColor;
      dynamicStyles.color = palette.text;
      dynamicStyles.colorHover = palette.text;
      break;
    }
  }
  switch (size) {
    case 'small': {
      dynamicStyles.padding = '4px 10px';
      dynamicStyles.iconMargin = 6;
      dynamicStyles.fontSize = '12px';
      dynamicStyles.lineHeight = 1.5;
      break;
    }
    case 'large': {
      dynamicStyles.padding = '10px 16px';
      dynamicStyles.iconMargin = 8;
      dynamicStyles.fontSize = '18px';
      dynamicStyles.lineHeight = 1.3333333;
      break;
    }
    default: {
      dynamicStyles.padding = '6px 16px';
      dynamicStyles.iconMargin = 8;
      dynamicStyles.fontSize = '14px';
      dynamicStyles.lineHeight = 1.52857143;
      break;
    }
  }
  // Styles
  const styles = {
    button: {
      boxSizing: 'border-box',
      position: 'relative',
      outline: 'none',
      transition: 'all 0.5s',
      display: 'inline-block',
      marginBottom: 0,
      fontWeight: 500,
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundImage: 'none',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      cursor: 'pointer',
      borderRadius: type !== 'rounded' ? '4px' : '20px',
      backgroundColor: dynamicStyles.background,
      border: dynamicStyles.border,
      color: dynamicStyles.color,
      fontSize: dynamicStyles.fontSize,
      lineHeight: dynamicStyles.lineHeight,
      padding: dynamicStyles.padding,
      ':disabled': {
        opacity: 0.7,
        cursor: 'not-allowed',
        ':hover': {
          color: dynamicStyles.color,
          backgroundColor: dynamicStyles.background,
        },
      },
      ':hover': {
        color: dynamicStyles.colorHover,
        textDecoration: 'none',
        backgroundColor: dynamicStyles.backgroundHover,
      },
    },
    icon: {
      marginLeft: `-${dynamicStyles.iconMargin / 2}px`,
      marginRight: children ? `${dynamicStyles.iconMargin}px` : `-${dynamicStyles.iconMargin / 2}px`,
    },
  };
  return (
    <button css={styles.button} {...otherProps}>
      {icon ? <span css={styles.icon}>{icon}</span> : ''}
      {children}
    </button>
  );
};

Button.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.any,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['text', 'outline', 'rounded']),
  icon: PropTypes.any,
};

export default Button;
