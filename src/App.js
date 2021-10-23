import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
