import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const Input = (props) => {
  const {
    className,
    placeholder,
    error,
    valid,
    name,
  } = props;

  const [focus, setFocus] = useState(false);
  const labelColor = focus ? colors.primary.color : '#cfd1d7';
  const labelError = error ? colors.danger.color : labelColor;
  const inputError = error ? `2px solid ${colors.danger.color}` : `2px solid ${focus ? colors.primary.color : '#cfd1d7'}`;
  const styles = {
    input: {
      boxSizing: 'border-box',
      background: '#fff',
      borderRadius: '7px',
      border: valid ? `2px solid ${colors.success.color}` : inputError,
      position: 'relative',
      marginBottom: '15px',
      transition: 'all .4s ease',
    },
    label: {
      position: 'absolute',
      background: '#fff',
      top: '-2px',
      left: '15px',
      color: '#fff',
      padding: '0 3px',
      transition: 'all .4s ease',
    },
    labelText: {
      marginTop: '-8px',
      fontSize: '12px',
      color: valid ? colors.success.color : labelError,
      fontWeight: '600',
      transition: 'all .4s ease',
    },
    control: {
      background: 'none',
      border: 'none',
      outline: 'none',
      fontSize: '16px',
      width: '100%',
      padding: '17px 14px',
      boxSizing: 'border-box',
    },
  };

  return (
    <div css={styles.input} className={className}>
      { placeholder ? <div css={styles.label}><div css={styles.labelText}>{placeholder}</div></div> : '' }
      <input css={styles.control}
             name={name}
             autoComplete="off"
             onFocus={() => setFocus(true)}
             onBlur={() => setFocus(false)} />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  valid: PropTypes.bool,
};

export default Input;
