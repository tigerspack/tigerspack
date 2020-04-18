import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyleSheet, css } from 'aphrodite';
// import { colors } from '../../utils/colors';

const Input = (props) => {
  const {
    className,
    placeholder,
  } = props;
  // const palette = colors[theme] ? colors[theme] : colors.primary;
  const styles = StyleSheet.create({
    input: {
      boxSizing: 'border-box',
      background: '#fff',
      borderRadius: '7px',
      border: '2px solid #cfd1d7',
      position: 'relative',
      marginBottom: '25px',
    },
    label: {
      position: 'absolute',
      background: '#fff',
      fontSize: '12px',
      top: '-8px',
      left: '15px',
      color: '#cfd1d7',
      fontWeight: '600',
      padding: '0 3px',
      display: 'none',
      transition: 'display .4s, color .4s ease',
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
  });
  return (
    <div className={classNames(css(styles.input), { [className]: className })}>
      { placeholder ? <div className={css(styles.label)}>{placeholder}</div> : '' }
      <input className={css(styles.control)} autoComplete="off" placeholder={placeholder} />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
