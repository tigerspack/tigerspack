import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const Blank = (props) => {
  const {
    border,
    children,
    shadow,
    indent,
    rounded,
    padding,
    ...otherProps
  } = props;

  const blankStyles = {
    background: '#fff',
    border: border && `1px solid ${colors[border].color}`,
    boxShadow: !border && `0 0 ${shadow}px rgba(0, 0, 0, 0.12), 0 ${shadow / 2}px ${shadow}px rgba(0, 0, 0, 0.24)`,
    boxSizing: 'border-box',
    transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
    borderRadius: `${rounded}px`,
    padding: `${padding}px`,
    marginBottom: `${indent}px`,
    display: 'flex',
    width: '100%',
  };
  return (
    <div css={blankStyles} {...otherProps}>
      {children}
    </div>
  );
};

Blank.propTypes = {
  border: PropTypes.string,
  children: PropTypes.any.isRequired,
  indent: PropTypes.number,
  shadow: PropTypes.number,
  rounded: PropTypes.number,
  padding: PropTypes.number,
};

Blank.defaultProps = {
  padding: 15,
  rounded: 3,
  shadow: 3,
  indent: 0,
};

export default Blank;
