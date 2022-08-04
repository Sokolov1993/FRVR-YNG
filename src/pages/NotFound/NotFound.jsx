import React from 'react';

import stylesNotFound from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={stylesNotFound.notFound}>
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
    </div>
  );
};

export default NotFound;
