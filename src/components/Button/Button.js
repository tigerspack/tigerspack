import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { colors } from '../../utils/colors';

const Button = (props) => {
  const {
    children,
    onClick,
    disabled,
    size,
    type,
  } = props;
  const palette = colors[props.theme] ? colors[props.theme] : colors.primary;
  const dynamicStyles = {};
  switch (type) {
    case 'text': {
      dynamicStyles.background = 'transparent';
      dynamicStyles.backgroundHover = palette.color;
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
      dynamicStyles.fontSize = '12px';
      dynamicStyles.lineHeight = 1.5;
      break;
    }
    case 'large': {
      dynamicStyles.padding = '10px 16px';
      dynamicStyles.fontSize = '18px';
      dynamicStyles.lineHeight = 1.3333333;
      break;
    }
    default: {
      dynamicStyles.padding = '6px 16px';
      dynamicStyles.fontSize = '14px';
      dynamicStyles.lineHeight = 1.52857143;
      break;
    }
  }
  const styles = StyleSheet.create({
    button: {
      boxSizing: 'border-box',
      position: 'relative',
      outline: 'none',
      transition: 'all 0.1s',
      display: 'inline-block',
      marginBottom: 0,
      fontWeight: 500,
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundImage: 'none',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      borderRadius: type !== 'rounded' ? '4px' : '20px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.7 : 1,
      backgroundColor: dynamicStyles.background,
      border: dynamicStyles.border,
      color: dynamicStyles.color,
      fontSize: dynamicStyles.fontSize,
      lineHeight: dynamicStyles.lineHeight,
      padding: dynamicStyles.padding,
      ':hover': {
        color: !disabled && dynamicStyles.colorHover,
        textDecoration: 'none',
        backgroundColor: !disabled && dynamicStyles.backgroundHover,
      },
    },
  });
  return (
    <div className={css(styles.button)} onClick={disabled ? () => {} : onClick}>
      {children}
    </div>
  );
};

Button.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  theme: 'primary',
};

export default Button;
