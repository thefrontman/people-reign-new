import React, { useState, useEffect } from 'react';
import './Roadmap.scss';
import titleImg from '../../assets/roadmap-title.png';
import armImg from '../../assets/arm.png';
import { useScrollPercentage } from 'react-scroll-percentage';
import maskImg from '../../assets/roadmap-mask.png';
import useWindowSize from '../../utils/useWindowSize';

const roadMapDetails = [
  {
    number: '02.',
    title: (
      <h4 className='title'>
        FIRST DROP <br /> The SILK ROAD <br /> trading COLLECTION
      </h4>
    ),
    details: (
      <div>
        <p>
          The Silk Road Trading (SRT) Collection. - 888 pieces – based on the
          eight (8), very rare and exclusive, one of one, NFTs in the Silk Road
          Genesis Collection. Available for minting on our website.
        </p>
        <p>
          Each of the 888 pieces in the SRT Collection will be released at a TBD
          price.
        </p>
        <p>
          If the Silk Road Genesis Collection becomes significant, the SRT
          Collection could become more collectible, and the existence of 888
          pieces, available at a much more reasonable price, will create more
          accessible trading opportunities for the People Reign community –
          related to the Genesis Collection.
        </p>
      </div>
    ),
  },
  {
    number: '03.',
    title: (
      <h4 className='title'>
        SECOND DROP <br /> The SILK ROAD <br /> GENESIS COLLECTION
      </h4>
    ),
    details: (
      <div>
        <p>
          Introducing the artist “Billie Halliday” and “The Silk Road Genesis
          Collection.” A collection of eight (8) one of one NFTs, that
          memorialize the dark web phenomenon known as Silk Road. The SRG
          Collection includes the following pieces that will be part of this
          exclusive collection:
        </p>
        <ul>
          <li>“Heroin”: The 2013 FBI Raid on Silk Road”;</li>
          <li>“Cocaine”: The Land of Bitcoin Mountain”</li>
          <li>“Mushrooms”: A Psychedelic Experience”</li>
          <li>“Methamphetamine”: Rocket Fuel, Cotton Candy, and Ice.”</li>
          <li>“LSD: Tripping on the Road.”</li>
          <li>“Morphine: The Road to Sedation.”</li>
          <li>“Dread Pirate Roberts: The Last Pirate”</li>
          <li>“Freedom of Choice.”</li>
        </ul>
        <p>
          These eight (8) pieces will be released in an auction format. With a
          minimum reserve for each piece. Only eight (8) have been created and
          will ever exist. Auction will be available on our website following
          the launch part.
        </p>
      </div>
    ),
  },

  {
    number: '04.',
    title: (
      <h4 className='title'>
        Additional <br /> collection releases
      </h4>
    ),
    details: (
      <dir>
        <p>
          Releases will occur on our Launchpad throughout 2022 and 2023, and
          will feature the works of incredible artists, and teams of artists,
          from around the world.
        </p>
        <p>
          These highly unique collections will break new ground in the NFT
          space, push the envelope of what’s possible, and act as a historical
          record of the world we are experiencing, as seen by the contemporary
          artists who lived through those experiences.
        </p>
        <p>
          Some of these unique NFTs will provide a historical record of what our
          generation is contemporaneously witnessing, minted immutably on the
          blockchain, for future generations to enjoy, collect, and trade.
        </p>
        <p>
          People Reign NFTs will pioneer and showcase new opportunities to
          harness blockchain and NFT technology, to advance the public good, and
          create new “firsts” in the NFT space. Our hope is that they will come
          to define the NFT space for generations to come.
        </p>
      </dir>
    ),
  },
  {
    number: '05.',
    title: (
      <h4 className='title'>
        NFT <br /> marketplace <br /> release
      </h4>
    ),
    details: (
      <div>
        <p>
          Our People Reign NFT marketplace will be released following our first
          two collections being launched on our minting launchpad. Our
          marketplace will allow you to buy, sell, and trade your People Reign
          NFT’s on the Ethereum blockchain without having to trade on a third
          party platform such as “OpenSea” or “looks rare.” Although you will
          still be able to market and sell all of our NFTs on other platforms.
        </p>
      </div>
    ),
  },
  {
    number: '06.',
    title: (
      <h4 className='title'>
        people reign nft <br /> Holder Airdrop
      </h4>
    ),
    details: (
      <div>
        <p>
          Following our NFT marketplace being released, we will be airdropping
          all People Reign NFT holders, a unique surprise NFT which will be free
          of charge and allowed to be traded freely on the open market.
        </p>
      </div>
    ),
  },
  {
    number: '07.',
    title: <h4 className='title'>growth</h4>,
    details: (
      <div>
        <p>
          Depending on the success of our NFT’s, a portion of revenue from
          sales, will be used by People Reign to continue hosting parties/IRL
          events around the U.S. and abroad, and allow People Reign to continue
          marketing, platform development, and to continue creating and minting
          new, and increasingly fascinating, and utilitarian NFTs. NFTs that
          will be designed to encourage thought, challenge the status quo, and
          inspire change.
        </p>
        <p>
          People Reign will offer its artist and collector community, and the
          world - leadership, insight, and direction on what is possible in the
          emerging NFT space.
        </p>
      </div>
    ),
  },
  {
    number: '08.',
    title: <h4 className='title'>TRANSPARENCY</h4>,
    details: (
      <div>
        <p>
          It’s important for everyone in the emerging NFTs space to understand
          that this is a new, emerging, and highly volatile space. No one can
          predict what, if anything, any NFT will be worth. The entire ecosystem
          defies predictions. So, we won’t make any predictions.
        </p>
        <p>
          We make no representations or warranties of any kind and all such
          warranties are expressly disclaimed.
        </p>
        <p>
          Instead, we will offer works that we believe are exceptional. And we
          will endeavor to build a community around what we hope and trust will
          be a collection that is worthy of the Metaverses of the future. Our
          primary focus will be on creating great art, and building and
          supporting our community. We have many goals, ambitions, and
          aspirations - but offer no guarantees or promises. Only our dedication
          to the pursuit of excellence and the importance of community.
        </p>
      </div>
    ),
  },
];

const Roadmap = () => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });
  const [moveValue, setMoveValue] = useState('');
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 1200) {
      setMoveValue(Math.floor(percentage.toPrecision(2) * 270));
    } else {
      setMoveValue(Math.floor(percentage.toPrecision(2) * 220));
    }
  }, [width, percentage]);

  //992
  return (
    <section className='container-fluid roadmap'>
      <img src={maskImg} alt='mask' className='bg-mask' />
      <div className='container'>
        <div className='title'>
          <img
            src={titleImg}
            alt='roadmap'
            className='img-fluid'
            data-aos='fade-down'
          />
          <h3 data-aos='fade-right'>People Reign</h3>
        </div>
        <div className='roadmap-container' ref={ref}>
          <div className='row g-md-4 g-2 roadmap-element active'>
            <div className='col-lg-1'>
              <h4>01.</h4>
            </div>
            <div className='col-lg-2 line-container'>
              <div className='line'></div>
              <img
                src={armImg}
                alt='arm'
                className='img-fluid roadmap-arm d-none d-lg-block'
                style={{
                  transform: `translateX(-50%) translateY(${
                    moveValue > 20 ? moveValue - 20 : -1
                  }em)`,
                }}
              />
            </div>
            <div className='col-lg-4'>
              <h4 className='title'>People Reign Launch Party </h4>
            </div>
            <div className='col-lg-5'>
              <p>
                Invitation only party – free access available exclusively to
                Discord members. The launch party will introduce People Reign to
                the world. This will be the debut of our newly developed
                platform and first NFT collection.
              </p>
            </div>
          </div>
          {roadMapDetails.map(({ number, title, details }, index) => (
            <div className='row g-md-4 g-2 roadmap-element' key={index}>
              <div className='col-lg-1'>
                <h4>{number}</h4>
              </div>
              <div className='col-lg-2 line-container'>
                <div className='line'></div>
              </div>
              <div className='col-lg-4'>{title}</div>
              <div className='col-lg-5'>{details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
