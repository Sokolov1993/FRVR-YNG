import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StoreRoutes from './routes/StoreRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StoreRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
