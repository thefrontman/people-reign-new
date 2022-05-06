import React from 'react';
import './Footer.scss';
import logo from '../../assets/footer-logo.png';
// import socialMedias from '../../data/socialMediaData';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <img src={logo} alt='people reign' className='img-fluid logo' />
        {/* <div>
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
      </div> */}
      </div>
    </footer>
  );
};

export default Footer;
