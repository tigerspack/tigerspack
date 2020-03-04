import React from 'react';
import PropTypes from 'prop-types';

const ButtonStyle = {
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
  backgroundColor: 'rgba(61, 94, 97, .9)',
  color: '#fff',
  ':hover': {
    textDecoration: 'none',
    backgroundColor: 'rgba(61, 94, 97, .8)',
  },
};

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <div style={ButtonStyle} onClick={onClick}>
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
