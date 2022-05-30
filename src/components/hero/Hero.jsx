import React from 'react';
import './Hero.scss';
import NavigationBar from '../navigation-bar/NavigationBar';
import armImg from '../../assets/hero-arm.png';
import logoImg from '../../assets/hero-logo.png';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='container-fluid hero' id='hero'>
      <NavigationBar />
      <div className='d-lg-none hero-btn-group on-top'>
        <NavLink to='/mint'>
          <button className='discord'>MINT</button>
        </NavLink>
        <a
          href='https://discord.com/invite/peoplereign'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='discord'>JOIN DISCORD</button>
        </a>
      </div>
      <div className='container text-center'>
        <img
          src={logoImg}
          alt='logo'
          className='logo animate__animated animate__fadeIn animate__slower	3s'
        />
        <img src={armImg} alt='arm' className='arm' />
      </div>
    </section>
  );
};

export default Hero;
