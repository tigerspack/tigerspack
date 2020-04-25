import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { defaultStyles } from '../../utils/defaultStyles';

const Blank = (props) => {
  const {
    align,
    border,
    children,
    shadow,
    indent,
    rounded,
    padding,
    ...otherProps
  } = props;

  const stylesObject = {};

  const posNameStab = (prop) => {
    if (prop === 'top' || prop === 'left') {
      return 'flex-start';
    }
    if (prop === 'bottom' || prop === 'right') {
      return 'flex-end';
    }
    return prop;
  };

  if (align) {
    stylesObject.alignContent = posNameStab(align);
    stylesObject.alignItems = posNameStab(align);
  }

  const blankStyles = {
    background: '#fff',
    border: border && `1px solid ${colors[border].color}`,
    boxShadow: !border && `0 0 ${shadow}px rgba(0, 0, 0, 0.12), 0 ${shadow / 2}px ${shadow}px rgba(0, 0, 0, 0.24)`,
    boxSizing: 'border-box',
    transition: defaultStyles.animation,
    borderRadius: rounded ? `${rounded}px` : defaultStyles.borderRadius,
    padding: `${padding}px`,
    marginBottom: `${indent}px`,
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    ...stylesObject,
  };

  return (
    <div css={blankStyles} {...otherProps}>
      {children}
    </div>
  );
};

Blank.propTypes = {
  align: PropTypes.oneOf(['left', 'right', 'center']),
  border: PropTypes.string,
  children: PropTypes.any.isRequired,
  indent: PropTypes.number,
  shadow: PropTypes.number,
  rounded: PropTypes.number,
  padding: PropTypes.number,
};

Blank.defaultProps = {
  padding: defaultStyles.indent,
  shadow: 3,
  indent: 0,
};

export default Blank;