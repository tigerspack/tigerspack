import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const Button = (props) => {
  const palette = colors[props.theme] ? colors[props.theme] : colors.primary;
  const styles = {
    button: {
      borderRadius: '4px',
      boxSizing: 'border-box',
      position: 'relative',
      fontSize: '14px',
      outline: 'none',
      transition: 'all 0.1s',
      display: 'inline-block',
      marginBottom: 0,
      fontWeight: 500,
      textAlign: 'center',
      verticalAlign: 'middle',
      cursor: 'pointer',
      backgroundImage: 'none',
      border: '1px solid transparent',
      whiteSpace: 'nowrap',
      padding: '6px 16px',
      lineHeight: 1.52857143,
      userSelect: 'none',
      backgroundColor: palette.color,
      color: palette.text,
      ':hover': {
        textDecoration: 'none',
        backgroundColor: palette.hoverColor,
      },
    },
  };
  const { children, onClick } = props;
  return (
    <div style={styles.button} onClick={onClick}>
      {children}
    </div>
  );
};

Button.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  theme: 'primary',
};

export default Button;
