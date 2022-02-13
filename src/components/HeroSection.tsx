import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {XIcon} from '@heroicons/react/outline';
import t from '../localization/en.json';
import data from '../constants/const.json';
import * as TopLogo from '../assets/img/top-logo.png';
import * as SomTraveler from '../assets/img/traveller.png';
import * as OpenseaIcon from '../assets/img/opensea.png';
import * as InstaIcon from '../assets/img/instagram.png';
import * as SmallMintLogo from '../assets/img/sm-mint-logo.png';
import { Link } from 'wouter';

/**
 * @return {jsx} rendered component
 */
export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <main>
        <div className='top-section'>
          <div className='memory-mint-logo'>
            <img src={TopLogo} alt="memory mint" />
          </div>
          <p>Memories Fade. NFTs Don't.</p>
          <div className='memory-mint-description'>
            <p>INTRODUCING</p>
            <p>Our premier collection</p>
            <p>With journalist and world traveller</p>
            <p>Sommer Shiels</p>
          </div>
          <Link className='presale-link' to='/mint'>
            <p>PRE-SALE</p>
            <p>NOW LIVE</p>
          </Link>
          <div className='sommer-travel-img-container'>
            <img src={SomTraveler} alt='sommer-traveller' />
          </div>
        </div>
        <div className='annoucement-section'>
          <div className='annoucement-header'>
            <div className='annoucement-logo'>
              <img src={SmallMintLogo} alt="memory mint annoucement" />
            </div>
            <div className='social-icons'>
              <img src={OpenseaIcon} alt="Opensea" />
              <img src={InstaIcon} alt="Instagram" />
            </div>
          </div>
          <div className='annoucement-body'>
            <h2>Annoucing a New Era in NFTs.</h2>
            <div className="annouce-description">
              <p>Unique, one-of-a-kind memories, preserved as immersive virtual</p>
              <p>reality experiences, individually minted on the blockchain.</p>
              <p>PROUDLY FEATURING THE ULTIMATE IN:</p>
            </div>
            <div className="annouce-items">
              <div className="annouce-item">
                <p className='annouce-title'>Collectibility:</p>
                <p className='annouce-content'>
                  NFTs are organized into COLLECTIONS and SERIES. Collect an entire series and unlock additional benefits. Complete an entire collection and unlock even more!
                </p>
              </div>

              <div className="annouce-item">
                <p className='annouce-title'>Rarity:</p>
                <p className='annouce-content'>
                  Memories are one of the rarest commocities on Earth. We limit the number of NFTs minted to honor the scarcity and uniqueness of each memory.
                </p>
              </div>

              <div className="annouce-item">
                <p className='annouce-title'>Utility:</p>
                <p className='annouce-content'>
                  Every Memory Mint NFT grants its holder acces to their very own, customizable Memory Mint in the Metaverse. Use it to store and showcase your NFTs and invite guests inside to view and experience your collection.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='annoucement-gltf'>
          <div className='annoucement-header'>
            <div className='annoucement-logo'>
              <img src={SmallMintLogo} alt="memory mint annoucement" />
            </div>
            <div className='social-icons'>
              <img src={OpenseaIcon} alt="Opensea" />
              <img src={InstaIcon} alt="Instagram" />
            </div>
          </div>
          <div className='annoucement-body'>
            <h2>They're not just NFTs. They're Experiences.</h2>
            <div className='annouce-main'>
              <div className="annouce-description">
                <p>Memory Mint NFTs are specially designed spherical meshes with 360-video images baked in.</p>
                <p>Mesmerizing and hypnotic just to look at, the real magic happens when you click on the nameplate.</p>
                <p>That simple click transports you into sphere, where you can experience the memory in all 360 degrees:</p>
              </div>
              <div className="gltf-viewer">
              </div>
            </div>
          </div>
        </div>

        <div className='annoucement-video'>
          <div className='annoucement-header'>
            <div className='annoucement-logo'>
              <img src={SmallMintLogo} alt="memory mint annoucement" />
            </div>
            <div className='social-icons'>
              <img src={OpenseaIcon} alt="Opensea" />
              <img src={InstaIcon} alt="Instagram" />
            </div>
          </div>
          <div className='annoucement-body'>
            <h2>Your Ticket Into the Metaverse.</h2>
            <div className="annouce-description">
              <p>Customize your own WebXR Environment to</p>
              <p>create your ultimate home on the Metaverse.</p>
            </div>
            <div className="annouce-main">
              <div className="video-player"></div>

              <div className='video-description'>
                <p>Holding a Memory Mint NFT entitles its owner to their own Memory Mint Vault to showcase their NFT collection.</p>
                <p>Memory Vaults are 3D WebXR environments where users are represented as avatars. They can be accessed via desktop computer, mobile device or best of all virtual reality headset.</p>
                <p>Link your Memory Vault to those of friends, family and others you meet in the Metaverse.</p>

                <div className='sample-xr-button'>
                  <p>Click here</p>
                  <p>To visit a sample</p>
                  <p>Memory mint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roadmap">
          <h2>Road Map</h2>
          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              1. Present Moment
            </div>
            <ul className="roadmap-section-description">
              <li>Welcome! Base in present moment awareness!</li>
              <li>Pre Sale of ou first collection begins on February 18, 2022, exclusively from our website.</li>
              <li>General sale begins on February 25, 2022, across all major platforms.</li>
              <li>Join our Discord for secret announcements and stealth drops!</li>
            </ul>
          </div>

          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              2. Short-team memories (Next six months)
            </div>
            <ul className="roadmap-section-description">
              <li>Future collections include releases from Tokyo, Machu Pichu and Australia</li>
              <li>Expand our network of Memory Mint Creators, fcaturing collaborations with travel bloggers, athletes and other amazing artists</li>
              <li>Launch of personalizee Memory  Mints for all NFT holders.</li>
              <li>Additional awards for complete series, set and collection holders.</li>
              <li>Create the world's largest network of immersive memory collections in the Metaverse.</li>
            </ul>
          </div>

          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              3. Long-term Memories (Next year)
            </div>
            <ul className="roadmap-section-description">
              <li>Introduction of long term memories: Exquisite, immersive story telling that sends you on an experience making you question the differnce between a memory and a dream.</li>
              <li>Launch of the Memory Marketplace: Buy, sell, rent and trade your collection on the largetst network of immersive memories in the Metaverse.</li>
              <li>Grow and support a community of immersive memory and experience creators.</li>
              <li>Join our Discord for secret announcements and stealth drops!</li>
            </ul>
          </div>

          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              4. Lucid Dreaming (Beyond)
            </div>
            <ul className="roadmap-section-description">
              <li>Continue to grow our community</li>
              <li>Help faster a world in which we create memories worth preserving... especially ones preserved for all elernity in the Metaverse</li>
            </ul>
          </div>
        </div>
        
        <div className="faq">
          <h2>FAQs</h2>
          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              What blockchain are memory mints minted on?
            </div>
            <p>Memory Mints are ERC-20 Tokens minted on the Etherium network.</p>
          </div>

          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              What's the difference between a memory, a dream and an experience?
            </div>
            <p>We don't claim to know the answer to that, but there are some links to people who do:</p>

          </div>

          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              What is a memory mint?
            </div>
            <p>A Memory Mint is an experience captured in 360-video that we turn into an Immersive NFT.</p>
          </div>

          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              What's An Immersive NFT?
            </div>
            <p>An Immersive NFT is a 3D model baked with 360 images that tell a storey.</p>
            <p>Like any NFT, they can be viewed in any wallet on any mobile device or desktop computer. Unlike other NFTs, though, Immmersive NFTs can also be viewed in a virutal reality headset, allowing you to experience the memory in all 360 degrees.</p>
          </div>

          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              How do you make an immersive NFT?
            </div>
            <p>Creating an Immersive NFT is a multi step process that involves 360-imaging hardware and stitching software, HDR image processing and 3D modeling. The decentralized method of creating Memory Mint Immersive NFTs ensures that each NFT is a unique work of art.</p>
          </div>


          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              What Happends to the source files after an nft is minted?
            </div>
            <p>Whenever possible, original source files are deleted and images archieved after minting. In some instances, presets and modeling data are preserved for future creation.</p>
          </div>
          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              When will the personalized memory vaults launch?
            </div>
            <p>The first generation of personalize Memory Vaults will launch within six months of the close of our first sale, "The Sommer Shiels Collection".</p>
          </div>

          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              How do you make an immersive NFT?
            </div>
            <p>Creating an Immersive NFT is a multi step process that involves 360-imaging hardware and stitching software, HDR image processing and 3D modeling. The decentralized method of creating Memory Mint Immersive NFTs ensures that each NFT is a unique work of art.</p>
          </div>

          <div className='roadmap-section'>
            <div className='roadmap-section-title'>
              How is my Memory vault a ticket to the metaverse?
            </div>
            <p>Your Memory vault will be a three-dimensional WebXR environment that can be accessed via any web browser. But, for a truly immersive experience, you can also access your Vault from a virtual reality headset. Once inside, you can move around your space via an avatar, as well as invite friends and guests inside your Vault to experience your NFT collection.</p>
          </div>

          <div className='roadmap-section'>
            <p>The Metaverse is many different things to many different people. Much like the World Wide Web is a networked collection of websites, we see the Metaverse as any networked collection of three-dimentional, virtual environments. In that sense, your Memory Vault can function as the perfect home base for your Metaverse exploration.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
