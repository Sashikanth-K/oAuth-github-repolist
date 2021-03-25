import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Debug from "./views/Debug";
import UserProvider from "./components/AuthProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <UserProvider>
            <Route path="/debug" exact component={Debug} />
            <Route path="/" component={Home} />
          </UserProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
