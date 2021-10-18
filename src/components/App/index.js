import React, { useState } from 'react';

import './normalize.css'
import './style.css';

import Header from '../layout/Header';
import Content from '../layout/Content';
import Footer from '../layout/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      <Content currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
