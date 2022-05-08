import React, { useState } from 'react';
import './NftLaunch.scss';
import titleImg from '../../assets/nft-title.svg';
import nftDateImg from '../../assets/nft-date.png';
import qrImg from '../../assets/nft-qr.png';
import socialMedias from '../../data/socialMediaData';
import N from '../../assets/nft-n.png';
import F from '../../assets/nft-f.png';
import T from '../../assets/nft-t.png';
import launch from '../../assets/nft-launch.png';
import party from '../../assets/nft-party.png';
import ReactPlayer from 'react-player';
import video from '../../assets/video.mp4';
import playIcon from '../../assets/play-icon.png';
import pauseIcon from '../../assets/pause-icon.png';

const NftLaunch = () => {
  const [playing, setPlaying] = useState(false);
  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  return (
    <section className='container-fluid nft-launch'>
      <div className='row'>
        <div className='col-md-9 left-section'>
          <div className='title'>
            <div className='nft'>
              <img src={N} alt='N' className='img-fluid' />
              <img src={F} alt='f' className='img-fluid' />
              <img src={T} alt='t' className='img-fluid' />
            </div>
            <div className='launch'>
              <img src={launch} alt='launch' className='img-fluid mb-3' />
              <img src={party} alt='party' className='img-fluid' />
            </div>
          </div>
          <div className='bg-container'>
            <div className='video-container justify-center'>
              <div className='video-wrapper'>
                <ReactPlayer
                  url={video}
                  playing={playing}
                  // controls
                  style={{ borderRadius: '8px' }}
                />
                <div
                  className={`controls ${playing ? 'playing' : 'paused'}`}
                  onClick={handlePlayPause}
                >
                  <img src={playing ? pauseIcon : playIcon} alt='play' />
                </div>
              </div>
            </div>
            <div className='details d-md-none'>
              <p>Details Released on:</p>
              <div className='mb-4'>
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
              <p>
                Follow and Register Now <br /> To Receive Your Invitation.
              </p>
              <button className='discord mx-auto mt-4'>JOIN DISCORD</button>
            </div>
          </div>
        </div>
        <div className='col-md-3 right-section'>
          <img src={nftDateImg} alt='launch date' className='img-fluid date' />
          <img src={qrImg} alt='launch date' className='img-fluid qr-code' />
        </div>
      </div>
    </section>
  );
};

export default NftLaunch;
