import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './normalize.css'
import './style.css';

import Header from '../layout/Header';
import Content from '../layout/Content';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  );
}

export default App;
