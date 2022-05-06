import React, { useEffect } from 'react';
import Hero from './components/hero/Hero';
import './styles/main.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NftLaunch from './components/nft-launch/NftLaunch';
import About from './components/about/About';
import Collection from './components/collection/Collection';
import FeaturedArtist from './components/featured-artist/FeaturedArtist';
import Creator from './components/creator/Creator';
import Footer from './components/footer/Footer';
import Roadmap from './components/roadmap/Roadmap';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 200,
    });
    Aos.refresh();
    document
      .querySelectorAll('img')
      .forEach((img) => img.addEventListener('load', () => Aos.refresh()));
  }, []);
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

export default App;
