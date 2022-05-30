import React from 'react';
import './NavigationBar.scss';
import { Link } from 'react-scroll';
//assets
import logo from '../../assets/nav-logo.png';
import hamburger from '../../assets/hamburger.png';
import socialMedias from '../../data/socialMediaData';
import { NavLink } from 'react-router-dom';

const centerNavs = [
  {
    target: 'about',
    title: 'About us',
    hasBar: true,
  },
  {
    target: 'roadmap',
    title: 'Roadmap',
    hasBar: true,
  },
  {
    target: 'artist',
    title: 'Artist',
    hasBar: false,
  },
];

const NavigationBar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        <h1 className='navbar-brand'>
          <img src={logo} alt='deployer' className='img-fluid' />
        </h1>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <img src={hamburger} alt='hamburger' className='img-fluid' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            {centerNavs.map(({ target, title, hasBar }, index) => (
              <li className='nav-item center' key={index}>
                <Link
                  to={target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='nav-link'
                >
                  {title}
                </Link>
                {hasBar && <div className='bar'></div>}
              </li>
            ))}
            {/* <li className='nav-item center d-none d-lg-flex'>
              <NavLink to='/mint' className='nav-link'>
                Mint
              </NavLink>
            </li> */}
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-item me-md-3 d-none d-lg-block'>
              <NavLink to='/mint'>
                <button className='discord'>MINT</button>
              </NavLink>
            </li>
            <li className='nav-item social'>
              <div className='nav-link'>
                {socialMedias.map(({ title, logo, link }, index) => (
                  <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mx-2'
                    key={index}
                  >
                    <img src={logo} alt={title} className='img-fluid' />
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
