import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { defaultStyles } from '../../utils/defaultStyles';

const Title = (props) => {
  const {
    children,
    padding,
    border,
    theme,
    ...otherProps
  } = props;

  const indent = props.indent || defaultStyles.indent;
  const size = props.size > 0 && props.size < 6 ? props.size : defaultStyles.buttonSize;

  const titleStyles = {
    fontWeight: 500,
    padding: `${padding}px`,
    color: theme ? `${colors[theme].color}` : 'inherit',
    marginBottom: `${indent}px`,
    borderBottom: border ? `1px solid ${colors[border].color}` : 'none',
    paddingBottom: border ? `${indent / 2}px` : `${padding}px`,
  };

  const TagName = `h${size}`;

  return <TagName css={titleStyles} {...otherProps}>{children}</TagName>;
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
  indent: PropTypes.number,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  padding: PropTypes.number,
  border: PropTypes.string,
  theme: PropTypes.string,
};

Title.defaultProps = {
  padding: 0,
};

export default Title;
