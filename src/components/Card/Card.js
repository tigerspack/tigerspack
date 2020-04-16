import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyleSheet, css } from 'aphrodite';
import { colors } from '../../utils/colors';

const Card = (props) => {
  const {
    children,
    className,
    title,
    icon,
    theme,
    outline,
    padding,
    withoutContainer,
  } = props;
  const palette = colors[theme] ? colors[theme] : colors.primary;
  const styles = StyleSheet.create({
    card: {
      border: outline ? 'none' : `1px solid ${palette.color}`,
      borderTop: outline && `3px solid ${palette.color}`,
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
      boxSizing: 'border-box',
      transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
      borderRadius: '3px',
      marginBottom: `${padding}px`,
      overflow: 'hidden',
    },
    title: {
      borderBottom: outline && '2px solid #e7eaec',
      background: !outline ? palette.color : '',
      color: !outline ? palette.text : palette.color,
      width: '100%',
      boxSizing: 'border-box',
      padding: `${padding}px`,
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'uppercase',
    },
    content: {
      padding: `${padding}px`,
    },
    icon: {
      marginRight: '10px',
    },
  });
  return (
    <div className={classNames(css(styles.card), { [className]: className })}>
      {title && <div className={css(styles.title)}>
        {icon && <span className={css(styles.icon)}>{icon}</span>}
        {title}
      </div>}
      {!withoutContainer ? <div className={css(styles.content)}>{children}</div> : children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  icon: PropTypes.any,
  withoutContainer: PropTypes.bool,
  padding: PropTypes.number,
  outline: PropTypes.bool,
  title: PropTypes.string,
  theme: PropTypes.string,
};

Card.defaultProps = {
  padding: 15,
};

export default Card;
