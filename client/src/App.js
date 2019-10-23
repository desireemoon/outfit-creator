import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  
  return (
    <div>
      <Router>
        <div className="header-container">
            <Header  />
          </div>
          <div className="main-container">
            <Main />
          </div>
      </Router>
        <div className="footer-container">
          <Footer />
        </div>
    </div>
  );
}

export default App;
