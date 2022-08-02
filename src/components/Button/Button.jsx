import React from 'react';

import stylesButton from './Button.module.scss';

const Button = ({ children, onClick, isSecondaryTheme }) => {
  return (
    <button
      onClick={onClick}
      className={
        isSecondaryTheme ? stylesButton.secondary : stylesButton.buttonBase
      }
    >
      {children}
    </button>
  );
};

export default Button;
