import React from 'react';
import NftLaunch from '../components/nft-launch/NftLaunch';
import About from '../components/about/About';
import Collection from '../components/collection/Collection';
import FeaturedArtist from '../components/featured-artist/FeaturedArtist';
import Creator from '../components/creator/Creator';
import Footer from '../components/footer/Footer';
import Roadmap from '../components/roadmap/Roadmap';
import Hero from '../components/hero/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <NftLaunch />
      <About />
      <Collection />
      <Roadmap />
      <FeaturedArtist />
      <Creator />
      <Footer />
    </>
  );
};

export default Home;
