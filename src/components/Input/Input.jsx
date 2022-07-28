import React from 'react';
import Button from '../Button/Button';

import stylesInput from './Input.module.scss';

const Input = ({ type, style, placeholder, btn }) => {
  return (
    <form className={stylesInput.form}>
      <input
        className={`${stylesInput.input} ${style && stylesInput[style]}`}
        type={type}
        placeholder={placeholder}
      ></input>
      {btn && <Button className={stylesInput.button}>Search</Button>}
    </form>
  );
};

export default Input;
