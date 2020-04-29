import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { defaultStyles } from '../../utils/defaultStyles';

const Button = (props) => {
  const {
    children,
    icon,
    indent,
    theme,
    type,
    ...otherProps
  } = props;
  const palette = colors[theme] ? colors[theme] : colors.primary;
  const size = props.size > 0 && props.size < 6 ? props.size : defaultStyles.buttonSize;
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
  // Styles
  const styles = {
    button: {
      boxSizing: 'border-box',
      position: 'relative',
      outline: 'none',
      transition: defaultStyles.animation,
      display: 'flex',
      flexDirection: 'column',
      flexFlow: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      marginBottom: `${indent}px`,
      fontWeight: 500,
      backgroundImage: 'none',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      cursor: 'pointer',
      lineHeight: 0,
      borderRadius: type !== 'rounded' ? `${defaultStyles.borderRadius}px` : '20px',
      backgroundColor: dynamicStyles.background,
      border: dynamicStyles.border,
      color: dynamicStyles.color,
      fontSize: `${size * 2 + 9}px`,
      height: `${(size * 2 + 11) + (size * 5)}px`,
      padding: `${((size * 5) / 2) - 0.5}px ${size * 5}px ${((size * 5) / 2) + 0.5}px`,
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
      marginLeft: `-${((size * 5) / 2) - 1}px`,
      marginRight: children ? `${(size * 5) / 2}px` : `-${((size * 5) / 2) - 1}px`,
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
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  type: PropTypes.oneOf(['text', 'outline', 'rounded']),
  icon: PropTypes.any,
  indent: PropTypes.number,
};

Button.defaultProps = {
  indent: 0,
};

export default Button;
