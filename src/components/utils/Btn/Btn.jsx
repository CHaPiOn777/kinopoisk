import React from 'react';
import style from './Btn.module.css'
const Btn = ({children, active}) => {
  const activeBtn = () => {
    return active ? style.active : style.inActive 
  }
  return (
    <>
      <button className={activeBtn()}>{children}</button>
    </>
  );
};

export default Btn;