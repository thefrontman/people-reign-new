import React from 'react';
import './Collection.scss';
import titleImg from '../../assets/collection-title.png';
// import collectionImg from '../../assets/collection.png';
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';
import c6 from '../../assets/c6.jpeg';
import c7 from '../../assets/c7.png';
import c8 from '../../assets/c8.png';

const collection = [
  {
    img: c5,
    name: 'mushroom',
  },
  {
    img: c2,
    name: 'cocaine',
  },
  {
    img: c7,
    name: 'freedom of choice',
  },
  {
    img: c3,
    name: 'Dread Pirate roberts',
  },
  {
    img: c8,
    name: 'lsd',
  },
  {
    img: c4,
    name: 'meth',
  },
  {
    img: c6,
    name: 'heroin',
  },
  {
    img: c1,
    name: 'morphine',
  },
];

const Collection = () => {
  return (
    <section className='container-fluid collection'>
      <div className='container'>
        <div className='title-container row g-5'>
          <div className='col-lg-6'>
            <img
              src={titleImg}
              alt='the silk road'
              className='img-fluid'
              data-aos='fade-right'
            />
            <h3 data-aos='fade-right' data-aos-delay='50'>
              Trading Collection
            </h3>
          </div>
          <div className='col-lg-6'>
            <p>
              Introducing the artist “Billie Halliday” and The Silk Road Trading
              (SRT) Collection. - 888 pieces – based on the eight (8), very rare
              and exclusive, one of one, NFTs in the Silk Road Genesis
              Collection. Available for minting on our website on May 30th 2022.
            </p>
            <p>
              Each of the 888 pieces in the SRT Collection will be released at a
              TBD price.
            </p>
          </div>
        </div>
        {/* <div className='text-center mt-5'>
          <img src={collectionImg} alt='collection' className='img-fluid' />
        </div> */}
        <div className='collection-container'>
          {collection.map(({ img, name }, index) => (
            <div className='collection-item' key={index} data-aos='fade-up'>
              <h4>{name}</h4>
              <img src={img} alt={name} className='img-fluid' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
