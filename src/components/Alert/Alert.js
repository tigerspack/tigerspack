import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { defaultStyles } from '../../utils/defaultStyles';

const Alert = (props) => {
  const {
    children,
    dismissible,
    outline,
    theme,
    closeIconSize,
    padding,
    indent,
    ...otherProps
  } = props;
  const palette = colors[theme] ? colors[theme] : colors.primary;
  const styles = {
    alert: {
      padding: `${padding}px`,
      background: outline ? palette.hoverColor : palette.color,
      border: `1px solid ${palette.color}`,
      color: palette.text,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      transition: defaultStyles.animation,
      borderRadius: defaultStyles.borderRadius,
      marginBottom: `${indent}px`,
      position: 'relative',
      width: '100%',
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
  };
  const [alertState, setAlertState] = useState(false);
  return (
    <div css={styles.alert} style={{ display: alertState ? 'none' : 'block' }} {...otherProps}>
      {dismissible ? <div css={styles.close} onClick={() => setAlertState(true)}>+</div> : ''}
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
  indent: PropTypes.number,
  padding: PropTypes.number,
};

Alert.defaultProps = {
  closeIconSize: 28,
  padding: defaultStyles.indent,
  indent: defaultStyles.indent,
};

export default Alert;
