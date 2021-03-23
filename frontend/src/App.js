import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Debug from './views/Debug';
import './App.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/debug" exact component={Debug} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
