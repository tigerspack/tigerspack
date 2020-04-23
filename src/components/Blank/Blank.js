import React from 'react';
import PropTypes from 'prop-types';
// import { colors } from '../../utils/colors';

const Blank = (props) => {
  const {
    children,
    shadow,
    indent,
    rounded,
    padding,
    ...otherProps
  } = props;
  // const palette = colors[theme] ? colors[theme] : colors.primary;


  const blankStyles = {
    background: '#fff',
    boxShadow: `0 0 ${shadow}px rgba(0, 0, 0, 0.12), 0 ${shadow / 2}px ${shadow}px rgba(0, 0, 0, 0.24)`,
    boxSizing: 'border-box',
    transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
    borderRadius: `${rounded}px`,
    padding: `${padding}px`,
    marginBottom: `${indent}px`,
    overflow: 'hidden',
  };
  return (
    <div css={blankStyles} {...otherProps}>
      {children}
    </div>
  );
};

Blank.propTypes = {
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
