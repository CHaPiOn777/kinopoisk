import React from 'react';
import Header from '../Header/Header';
import styleCss from './App.module.css'

const App = () => {
  return (
    <div className={styleCss.page}>
      <Header/>
    </div>
  );
};

export default App;