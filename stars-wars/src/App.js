import React from 'react';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Character from './Character';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
          <Route path="/" component={Home} exact />
          <Route path="/Character" component={Character} exact />
          </div>
      </BrowserRouter>
  );
}

export default App;
