import React from 'react';
import './About.scss';
import faceImg from '../../assets/about-face.png';
import titleImg from '../../assets/about-title.png';
import bgMask from '../../assets/purple-bg-mask.png';

const About = () => {
  return (
    <section className='about'>
      <img src={bgMask} alt='mask' className='bg-mask' />
      <div className='container top'>
        <div className='img-container'>
          <img src={faceImg} alt='face' className='img-fluid about-img' />
        </div>
        <div className='content-container'>
          <h2 data-aos='fade-left'>
            The Great Work Of Today And Tomorrow <br /> Will Be Done In Teams
          </h2>
          <div className='main-content'>
            <img
              src={titleImg}
              alt='people reign'
              className='img-fluid'
              data-aos='fade-in'
            />
            <h3 data-aos='fade-in'>Creativity | Collaboration | Community</h3>
            <p data-aos='fade-in'>
              People Reign is an invitation only collection of gifted NFT
              artists, storytellers, musicians, poets, experimental artists, and
              other creatives, who together form a community with their patrons
              and collectors.
            </p>
            <p data-aos='fade-in'>
              Our mission is to empower exceptional artists, by creating a
              community that supports creativity, collaboration, and compassion.
            </p>
            <p data-aos='fade-in'>
              We plan to do that by facilitating the creative and collaborative
              process, bringing together a community of passionate artists and
              collectors, and by creating, showcasing and promoting art that is
              worthy of the Metaverses of the future.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <h2 className='bottom-title' data-aos='fade-up'>
          Discover extraordinary pieces of digital art
        </h2>
      </div>
    </section>
  );
};

export default About;
