import React from 'react';
import { Route } from 'react-router-dom';
import './styling/App.css';
import LandingPage from './components/LandingPage';
import UserHomePage from './components/UserHomePage';

function App() {
  return (
    <div class="main-wrapper">

        <Route exact path='/' component={LandingPage}/>
        <Route path ='/usershomepage' component={UserHomePage}/>
    </div>
  )

};

export default App;
