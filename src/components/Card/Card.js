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
  const padding = props.padding || defaultStyles.indent;
  const indent = props.indent || defaultStyles.indent;
  const styles = {
    card: {
      border: outline ? 'none' : `1px solid ${palette.color}`,
      borderTop: outline && `3px solid ${palette.color}`,
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
      boxSizing: 'border-box',
      transition: defaultStyles.animation,
      borderRadius: `${defaultStyles.borderRadius}px`,
      marginBottom: `${indent}px`,
      overflow: 'hidden',
    },
    title: {
      borderBottom: outline && '2px solid #e7eaec',
      background: !outline ? palette.color : '',
      color: !outline ? palette.text : palette.color,
      width: '100%',
      boxSizing: 'border-box',
      padding: `${padding}px`,
      fontSize: defaultStyles.mediumFontSize,
      fontWeight: '600',
      textTransform: 'uppercase',
    },
    content: {
      padding: `${padding}px`,
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
  padding: PropTypes.number,
  outline: PropTypes.bool,
  title: PropTypes.string,
  theme: PropTypes.string,
};

export default Card;
