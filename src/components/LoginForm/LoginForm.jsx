import React, { useState, useRef } from 'react';
import Button from '../Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import { fetchLogIn } from '../../api/requests/logIn/fetchLogIn';
import { isOpenAuthForm } from '../../api/requests/logIn/fetchLogInSlice';

import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';

import stylesLoginForm from './LoginForm.module.scss';

const LoginForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState('password');
  const [wrongValue, setWrongValue] = useState(false);
  const [onClose, setOnClose] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.fetchLogIn.token);

  const form = useRef();
  const closeBtn = useRef();

  const onShowPassword = () => {
    if (!showPassword) {
      setShowPassword(true);
      setInputType('text');
    } else {
      setShowPassword(false);
      setInputType('password');
    }
  };

  const onNameChange = (event) => {
    setNameValue(event.target.value.trim());
  };

  const onPasswordChange = (event) => {
    setPasswordValue(event.target.value.trim());
  };

  const onCloseForm = (event) => {
    if (
      !form.current.contains(event.target) ||
      closeBtn.current.contains(event.target)
    ) {
      event.stopPropagation();
      dispatch(isOpenAuthForm(false));
    }
  };

  const onLogInFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const login = formData.get('login');
    const password = formData.get('password');

    dispatch(fetchLogIn({ login, password }));

    if (token) {
      dispatch(isOpenAuthForm(false));
    } else if (!token) {
      setTimeout(() => {
        setWrongValue(true);
      }, 2000);
    }

    setNameValue('');
    setPasswordValue('');
  };

  if (token && !onClose) {
    setTimeout(() => {
      setOnClose(true);
    }, 7000);

    return (
      <div>
        <Alert
          onClose={() => {
            setOnClose(true);
          }}
          severity="success"
        >
          You Are Succesfully Logged In!
        </Alert>
      </div>
    );
  }

  return (
    !token && (
      <div className={stylesLoginForm.container} onClick={onCloseForm}>
        <form
          className={stylesLoginForm.wrapper}
          onSubmit={onLogInFormSubmit}
          ref={form}
        >
          <div onClick={onCloseForm} ref={closeBtn}>
            <CloseIcon />
          </div>
          <h2 className={stylesLoginForm.title}>Log In</h2>
          {wrongValue && (
            <p className={stylesLoginForm.wrongpass}>
              You entered wrong login or password!
            </p>
          )}
          <div className={stylesLoginForm.input}>
            <input
              type="name"
              name="login"
              placeholder="Enter Your Name"
              autoComplete="on"
              value={nameValue}
              onChange={onNameChange}
              required
            />
            <input
              className={stylesLoginForm.passwordField}
              type={inputType}
              name="password"
              placeholder="Enter Your Password"
              autoComplete="on"
              value={passwordValue}
              onChange={onPasswordChange}
              required
            />
            {!showPassword && (
              <span
                className={stylesLoginForm.showPassword}
                onClick={onShowPassword}
              >
                <VisibilityIcon />
              </span>
            )}
            {showPassword && (
              <span
                className={stylesLoginForm.showPassword}
                onClick={onShowPassword}
              >
                <VisibilityOffIcon />
              </span>
            )}
          </div>
          <Button>Log In</Button>
        </form>
      </div>
    )
  );
};

export default LoginForm;
