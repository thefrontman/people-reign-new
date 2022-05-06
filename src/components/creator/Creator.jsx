import React from 'react';
import './Creator.scss';
import titleImg from '../../assets/creator-title.png';
import armImg from '../../assets/arm.png';
import creatorImg from '../../assets/creator.png';

const Creator = () => {
  return (
    <section className='creator'>
      <div className='container'>
        <img
          src={armImg}
          alt='arm'
          className='img-fluid arm d-none d-md-block'
        />
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-12 col-md-3 mid-container'>
            <div className='title'>
              <img src={titleImg} alt='creator' className='img-fluid' />
              <h3>By</h3>
            </div>
            <div className='text-center mb-5'>
              <img src={creatorImg} alt='creator' className='img-fluid' />
              <h4 className='text-uppercase mt-4'>George J. Chanos</h4>
            </div>
          </div>
          <div className='col-12 col-md-7 d-flex align-items-end'>
            <div className='content ps-md-5'>
              <p>
                George J. Chanos, served as Nevada's 31st Attorney General. He's
                the Chairman of Capriotti's, and Wing Zone, two of the fastest
                growing franchises in the country with over 170 locations. He's
                also a strategic business consultant, an author, and a speaker.{' '}
              </p>
              <p>
                His most recent book, Millennial Samurai: A Mindset for the 21st
                Century, takes a look at the technological revolution, and how
                it will likely impact our lives over the next thirty years.{' '}
              </p>
              <p>
                Mr. Chanos has been called a futurist and a visionary. He speaks
                about what he sees as our greatest opportunities and challenges;
                highlights the issues that he believes should inspire and
                concern all of us; and explains how change, disruption, and even
                adversity can create extraordinary opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;
