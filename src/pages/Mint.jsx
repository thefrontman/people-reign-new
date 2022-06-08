import React from 'react';

const Mint = () => {
  return (
    <div>
      <iframe
        src='https://art-mint.netlify.app'
        title='Mint'
        style={{ width: '100%', height: '100vh' }}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Mint;
