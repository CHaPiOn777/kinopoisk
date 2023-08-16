import React from 'react';
import Header from '../Header/Header';
import Poster from '../Poster/Poster';
import styleCss from './App.module.css'

const App = () => {
  return (
    <div className={styleCss.page}>
      <Header/>
      <Poster/>
    </div>
  );
};

export default App;