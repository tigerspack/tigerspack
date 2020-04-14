import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { colors } from '../../utils/colors';

const Alert = (props) => {
  const {
    children,
    dismissible,
    outline,
    theme,
    closeIconSize,
    padding,
  } = props;
  const palette = colors[theme] ? colors[theme] : colors.primary;
  const styles = StyleSheet.create({
    alert: {
      padding: `${padding}px`,
      background: outline ? palette.hoverColor : palette.color,
      border: `1px solid ${palette.color}`,
      color: palette.text,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
      borderRadius: '4px',
      marginBottom: `${padding}px`,
      position: 'relative',
    },
    close: {
      textAlign: 'left',
      position: 'absolute',
      transform: 'rotate(45deg)',
      cursor: 'pointer',
      fontFamily: '-webkit-pictograph',
      fontWeight: 'bold',
      lineHeight: `${closeIconSize}px`,
      width: `${closeIconSize}px`,
      height: `${closeIconSize}px`,
      fontSize: `${closeIconSize}px`,
      right: `${padding / 2}px`,
      top: `${padding}px`,
      userSelect: 'none',
      opacity: 0.7,
      ':hover': {
        opacity: 1,
      },
    },
  });
  const [alertState, setAlertState] = useState(false);
  return (
    <div className={css(styles.alert)} style={{ display: alertState ? 'none' : 'block' }}>
      {dismissible ? <div className={css(styles.close)} onClick={() => setAlertState(true)}>+</div> : ''}
      {children}
    </div>
  );
};

Alert.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.any.isRequired,
  dismissible: PropTypes.bool,
  outline: PropTypes.bool,
  closeIconSize: PropTypes.number,
  padding: PropTypes.number,
};

Alert.defaultProps = {
  closeIconSize: 28,
  padding: 15,
};

export default Alert;
