import React from 'react';
import css from './Poster.module.css';
import play from '../../image/play.svg';
import poster from '../../image/Poster.jpg';
import Btn from '../utils/Btn/Btn';
import Stars from '../utils/Stars/Stars';

const Poster = () => {
  return (
    <section className={css.poster}>
      <div className={css.bg}><img src={poster} alt="Poster"/></div>
      <div className={css.info}>
        <h2 className={css.date}>31 SEPT 2019</h2>
        <h1 className={css.title}>AVENGERS - INFINITY WAR</h1>
        <p className={css.subtitle}>
          In&nbsp;2016, Marvel shortened the title to&nbsp;Avengers:
          Infinity War. Filming began in&nbsp;January 2017 at&nbsp;
          Pinewood Atlanta Studios in&nbsp;Fayette County, Georgia, with a&nbsp;
          large cast consisting mostly of&nbsp;actors.
        </p>
        <div className={css.rating}>
          <Stars/>
          
        </div>
        <div className={css.trailer}>
          <img src={play} alt="Play btn" className="" />
          <p className={css.trailerPlay}>Watch Trailer</p>
        </div>
        <Btn active={true}>Book Show</Btn>
      </div>

    </section>
  );
};

export default Poster;