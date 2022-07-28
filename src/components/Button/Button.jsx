import React from 'react';

import stylesButton from './Button.module.scss';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={stylesButton.buttonBase}>
      {children}
    </button>
  );
};

export default Button;
