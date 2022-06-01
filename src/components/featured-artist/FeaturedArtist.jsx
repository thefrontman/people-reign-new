import React from 'react';
import './FeaturedArtist.scss';
import t1 from '../../assets/t1.png';
import t2 from '../../assets/t2.png';
import t3 from '../../assets/t3.png';
import t4 from '../../assets/t4.png';
import titleImg from '../../assets/featured-artist-title.png';

const team = [
  {
    name: 'BILLIE HALLIDAY',
    image: t1,
    about:
      "Similar to Banksy out of London, Billie is an unknown artist whose NFT work is a collection of political satire that documents and sheds light on what's happening in the world today – as it happens. Billie's work is provocative, cutting edge, historical and collectible.",
  },
  {
    name: 'Garilyn BRUNE',
    image: t2,
    about:
      'A deceased Los Angeles drag queen whose images of Rush Limbaugh and Mitch McConnell will provoke thoughts and question our assumptions.',
  },
  {
    name: 'Shevi Al Faud',
    image: t3,
    about:
      'AKA "veevinci," is a designer and illustrator from Bangladesh. Her work is based on her personal observations, insights, and interpretations of the human condition and the world around her.',
  },
  {
    name: 'Lou Majors',
    image: t4,
    about:
      'A successful graphic designer and now abstract artist born in New York City in 1950, first becoming famous for his graffiti art in Atlanta tagged "You are God." His art is informed by his metaphysical philosophy and writings.',
  },
];
const FeaturedArtist = () => {
  return (
    <section className='featured-artist' id='artist'>
      <div className='container'>
        <img
          src={titleImg}
          alt='featured-artist'
          className='img-fluid title'
          data-aos='fade-right'
        />
        <h3 data-aos='fade-right' data-aos-delay='50'>
          The Collection
        </h3>

        <div className='row g-5 team-container'>
          {team.map(({ name, image, about }, index) => (
            <div className='col-md-3' key={index}>
              <div className='team-card' data-aos='fade-up'>
                <img src={image} alt={name} className='img-fluid' />
                <h4>{name}</h4>
                <p>{about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtist;
