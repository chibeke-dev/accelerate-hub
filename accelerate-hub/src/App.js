import React from 'react';
import Home from './pages/landingPages/Home';
import Signup from './pages/registerPages/Signup';
import Login from './pages/registerPages/Login';
import HomePage from './pages/dashboardPages/HomePage'





import {  Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
       
       <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={HomePage} />
    </Switch>
    
  );
}

export default App;
