import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './normalize.css'
import './style.css';

import Header from '../layout/Header';
import Content from '../layout/Content';
import Footer from '../layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
