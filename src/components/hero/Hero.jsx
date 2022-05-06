import React from 'react';
import './Hero.scss';
import NavigationBar from '../navigation-bar/NavigationBar';
import armImg from '../../assets/hero-arm.png';
import logoImg from '../../assets/hero-logo.png';

const Hero = () => {
  return (
    <section className='container-fluid hero' id='hero'>
      <NavigationBar />
      <div className='justify-center d-lg-none mt-3 on-top'>
        <button className='discord'>JOIN DISCORD</button>
      </div>
      <div className='container text-center'>
        <img src={logoImg} alt='logo' className='logo' />
        <img src={armImg} alt='arm' className='arm' />
      </div>
    </section>
  );
};

export default Hero;
