import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { database, DbContext } from '../hooks/useDbContext';
import Home from '../views/Home';
import Booking from '../views/Booking';
import User from '../views/User';
import Cancel from '../views/Cancel';
import Verify from '../views/Verify';

function App() {
  return (
    <DbContext.Provider value={database}>
      <BrowserRouter>
        <Switch>
          <Route path="/user/:phone">
            <User />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/cancel">
            <Cancel />
          </Route>
          <Route path="/verify">
            <Verify />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </DbContext.Provider>
  );
}

export default App;
