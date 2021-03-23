import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../logo.svg';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const apiMessage = (await axios.get('/api')).data; 
      setMessage(apiMessage);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <p>
          TODO: Add initialize OAuth flow button here
        </p>
      </header>
    </div>
  );
}

export default Home;
