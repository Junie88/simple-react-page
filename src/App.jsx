import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Items from './pages/Featured';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/item/:id' component={Items} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
