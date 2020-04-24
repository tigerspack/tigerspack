import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const Title = (props) => {
  const {
    children,
    indent,
    size,
    padding,
    border,
    ...otherProps
  } = props;

  const titleStyles = {
    fontWeight: 500,
    padding: `${padding}px`,
    marginBottom: `${indent}px`,
    borderBottom: border ? `1px solid ${colors[border].color}` : '',
    paddingBottom: border ? `${indent}px` : '',
  };

  switch (size) {
    case 'large':
      return <h1 css={titleStyles} {...otherProps}>{children}</h1>;
    case 'small':
      return <h3 css={titleStyles} {...otherProps}>{children}</h3>;
    default:
      return <h2 css={titleStyles} {...otherProps}>{children}</h2>;
  }
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
  indent: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  padding: PropTypes.number,
  border: PropTypes.string,
};

Title.defaultProps = {
  padding: 0,
  indent: 10,
};

export default Title;
