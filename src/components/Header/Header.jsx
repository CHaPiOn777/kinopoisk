import React from 'react';
import styleCSS from './Header.module.css';
import logo from '../../image/logo.svg';
import Btn from '../utils/Btn/Btn';
const Header = () => {
  return (
    <div className={styleCSS.header}>
      <img src={logo} className={styleCSS.logo} />
      <nav >
        <ul className={styleCSS.ul}>
          <li className={styleCSS.li}>Movies</li>
          <li className={styleCSS.li}>SHOWS</li>
          <li className={styleCSS.li}>Actors</li>
          <li className={styleCSS.li}>News</li>
          <li className={styleCSS.li}>Community</li>
        </ul>
      </nav>
      <div className={styleCSS.LK}>
         <Btn active={false}>Log IN</Btn>
         <Btn active={true}>SIGN UP</Btn>
      </div>
    </div>
  );
};

export default Header;