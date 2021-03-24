import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../logo.svg';

function Home() {
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiMessage = (await axios.get('/api')).data; 
        setMessage(apiMessage);
      } catch (error) {
        setErrorMessage("WARNING: There is no connection with the API server!")
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {message && <p className="bg-green-500 py-2 px-4 mb-2">{message}</p>}
        {errorMessage && <p className="bg-red-500 py-2 px-4 mb-2">{errorMessage}</p>}
        <p>
          TODO: Add initialize OAuth flow button here
        </p>
      </header>
    </div>
  );
}

export default Home;
