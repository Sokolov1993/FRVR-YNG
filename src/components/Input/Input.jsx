import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import stylesInput from './Input.module.scss';

const Input = ({ type, theme, placeholder, btn, data, onFromSubmit }) => {
  const [inputData, setInputData] = useState([]);
  const [autocomplete, setAutocomplete] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    onFromSubmit(autocomplete);
    setInputData('');
    setShowAutocomplete(false);
  };

  const closeAutocomplete = () => {
    setShowAutocomplete(false);
  };

  const inputOnChangeHandler = (event) => {
    setInputData(event.target.value);
    setShowAutocomplete(true);
  };

  const searchAutocomplete = () => {
    const autocompleteArray =
      data &&
      data.length > 0 &&
      data.filter(
        (eachItem) =>
          eachItem.title.toLowerCase().includes(inputData.toLowerCase()) ||
          eachItem.description
            .toLowerCase()
            .includes(inputData.toLowerCase()) ||
          eachItem.category.toLowerCase().includes(inputData.toLowerCase())
      );

    // console.log(autocompleteArray);
    setAutocomplete(autocompleteArray);
  };

  useEffect(searchAutocomplete, [inputData]);

  // console.log(inputData);

  return (
    <>
      {showAutocomplete && (
        <div className={stylesInput.backDrop} onClick={closeAutocomplete}></div>
      )}
      <form className={stylesInput.form} onSubmit={onSubmit}>
        <input
          value={inputData}
          onChange={inputOnChangeHandler}
          className={`${stylesInput.input} ${theme && stylesInput[theme]}`}
          type={type}
          placeholder={placeholder}
        ></input>
        {btn && <Button className={stylesInput.button}>Search</Button>}
        {showAutocomplete && autocomplete.length > 0 && (
          <div className={stylesInput.autocomplete}>
            {autocomplete.map((item) => (
              <Link key={item.id} to={`/products/${item.id}`}>
                {item.title} <img src={item.image} alt=""></img>
              </Link>
            ))}
          </div>
        )}
      </form>
    </>
  );
};

export default Input;
