import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { defaultStyles } from '../../utils/defaultStyles';

const Card = (props) => {
  const {
    children,
    title,
    icon,
    theme,
    outline,
    withoutContainer,
    ...otherProps
  } = props;
  const palette = colors[theme] ? colors[theme] : colors.primary;
  const shadow = props.shadow < 6 ? props.shadow : defaultStyles.boxShadow;
  const indent = props.indent || defaultStyles.indent;
  const size = props.size > 0 && props.size < 6 ? props.size : defaultStyles.cardSize;
  const styles = {
    card: {
      border: outline ? 'none' : `1px solid ${palette.color}`,
      borderTop: outline && `3px solid ${palette.color}`,
      background: '#fff',
      boxShadow: `0 0 ${shadow}px rgba(0, 0, 0, 0.12), 0 ${shadow / 2}px ${shadow}px rgba(0, 0, 0, 0.24)`,
      boxSizing: 'border-box',
      transition: defaultStyles.animation,
      borderRadius: `${defaultStyles.borderRadius}px`,
      marginBottom: `${indent}px`,
      overflow: 'hidden',
    },
    title: {
      borderBottom: outline ? '2px solid #e7eaec' : '2px solid transparent',
      background: !outline ? palette.color : 'inherit',
      color: !outline ? palette.text : '#304355',
      width: '100%',
      boxSizing: 'border-box',
      padding: `${size * 2.5 + 6}px ${size * 3 + 6}px`,
      fontSize: `${size * 1.5 + 9}px`,
      fontWeight: '600',
      textTransform: 'uppercase',
    },
    content: {
      padding: `${size * 3 + 6}px`,
    },
    icon: {
      marginRight: '10px',
    },
  };
  return (
    <div css={styles.card} {...otherProps}>
      {title && <div css={styles.title}>
        {icon && <span css={styles.icon}>{icon}</span>}
        {title}
      </div>}
      {!withoutContainer ? <div css={styles.content}>{children}</div> : children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  icon: PropTypes.any,
  withoutContainer: PropTypes.bool,
  indent: PropTypes.number,
  outline: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  shadow: PropTypes.oneOf([1, 2, 3, 4, 5]),
  title: PropTypes.string,
  theme: PropTypes.string,
};

Card.defaultProps = {
  size: 3,
};

export default Card;
