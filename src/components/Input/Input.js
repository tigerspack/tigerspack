import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { defaultStyles } from '../../utils/defaultStyles';

const Input = (props) => {
  const {
    className,
    placeholder,
    error,
    indent,
    valid,
    value,
    ...otherProps
  } = props;
  const size = props.size > 0 && props.size < 6 ? props.size : defaultStyles.inputSize;
  // Config
  const inputBorderWeight = 1;
  // Hooks
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  // Different states
  const labelColor = focus ? colors.primary.color : '#cfd1d7';
  const labelError = error ? colors.danger.color : labelColor;
  const inputError = error ? `${inputBorderWeight}px solid ${colors.danger.color}` : `${inputBorderWeight}px solid ${focus ? colors.primary.color : '#cfd1d7'}`;
  const activeLabel = inputValue.length === 0 && !focus;
  // Styles
  const styles = {
    input: {
      boxSizing: 'border-box',
      background: '#fff',
      borderRadius: `${defaultStyles.borderRadius}px`,
      border: valid ? `${inputBorderWeight}px solid ${colors.success.color}` : inputError,
      position: 'relative',
      marginBottom: `${indent}px`,
      transition: defaultStyles.animation,
      width: '100%',
    },
    label: {
      position: 'absolute',
      background: activeLabel ? 'transparent' : '#fff',
      top: activeLabel ? '0' : `-${inputBorderWeight}px`,
      left: `${size * 2.5 + 5}px`,
      color: '#fff',
      padding: '0 3px',
      transition: `${defaultStyles.animation}, top 0s`,
      zIndex: 1,
    },
    labelText: {
      marginTop: activeLabel ? `${size * 1.5 + 5}px` : '-6px',
      fontSize: activeLabel ? `${size * 1.5 + 10}px` : '12px',
      height: activeLabel ? `${size * 1.5 + 10}px` : '12px',
      lineHeight: activeLabel ? `${size * 1.5 + 10}px` : '12px',
      color: valid ? colors.success.color : labelError,
      fontWeight: '500',
      transition: defaultStyles.animation,
    },
    control: {
      background: 'none',
      border: 'none',
      outline: 'none',
      width: '100%',
      fontSize: `${size * 1.5 + 10}px`,
      height: `${(size * 2 + 11) + (size * 5)}px`,
      padding: `${size * 1.5 + 5}px ${size * 2.5 + 5}px`,
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 2,
    },
  };
  return (
    <div css={styles.input} className={className}>
      { placeholder ? <div css={styles.label}><div css={styles.labelText}>{placeholder}</div></div> : '' }
      <input css={styles.control}
             autoComplete="off"
             value={inputValue}
             onChange={(event) => setInputValue(event.target.value)}
             onFocus={() => setFocus(true)}
             onBlur={() => setFocus(false)} {...otherProps} />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  indent: PropTypes.number,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  valid: PropTypes.bool,
  value: PropTypes.string,
};

Input.defaultProps = {
  indent: 0,
};

export default Input;
