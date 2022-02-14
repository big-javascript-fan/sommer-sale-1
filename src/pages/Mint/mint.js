import { Link } from 'react-router-dom';
/**
 * @return {jsx} rendered component
 */
const Mint = () => {
  return (
    <div className='mint-page'>
      <div className="header">
        <Link to="/">The Memory Mint</Link>
        <h1>The Sommer Shiels Collection</h1>
      </div>
      <div className='mint-container'>
        <div className='about-collection'>
          <p>About the collection</p>
          <p className='collection-description'>
            Sommer Shields is a journalist, beauty industry expert and travel blogger. These memories were created in 2019 while on-locaction shooting the documentary, "Origins of Beauty".
          </p>
        </div>
        <div className="series-container">
          <div className="serie-description">
            <h2>Series A:</h2>
            <p>LIMIT 1098</p>
            <div className="serie-text">
              "On January 23, 2019, I set sail from Iquitos, Peru for the headwaters of the upper Ucayali River to meet with a Shipibo-Conibo ayahuasca medicine worker. Once there, I made friends with this precious monkey! This little guy cluing to me like I was its mother, while it played with my hair and made kissing sounds at me. Looking into those deep brown eyes immeidately takes me back to that most amazing time in my life. I was at this village for a little over six hours on this trip, so I'm limiting each of these to only 360 immersive NFTs, once for every minute I spent with my monkey friend."
            </div>
          </div>
          <div className='serie-sale'>
            <div className="gltf-viewer">
              <div className="gltf-content">

              </div>
              <p>"Playing with my hair"</p>
            </div>
            <div className="nft-details-container">
              <table className="responstable">
                <tr>
                  <th>RELEASE</th>
                  <th data-th="Driver details"><span>AVAILABLE</span></th>
                  <th>SOLD</th>
                  <th>PRICE</th>
                  <th></th>
                </tr>
                
                <tr>
                  <td>PRESALE</td>
                  <td>66</td>
                  <td>44</td>
                  <td>0.07 ETH</td>
                  <td>
                    BUY NOW
                  </td>
                </tr>
                
                <tr>
                  <td>FIRST ISSUE</td>
                  <td>266</td>
                  <td>33</td>
                  <td>.08 ETH</td>
                  <td>FEBRUARY 27, 2022</td>
                </tr>
                
                <tr>
                  <td>RESERVED</td>
                  <td>44</td>
                  <td>44</td>
                  <td>TBA</td>
                  <td>TBA</td>
                </tr>
              </table>
            </div>
          </div>
          <div className='serie-sale'>
            <div className="gltf-viewer">
              <div className="gltf-content">

              </div>
              <p>"Playing with my hair"</p>
            </div>
            <div className="nft-details-container">
              <table className="responstable">
                <tr>
                  <th>RELEASE</th>
                  <th data-th="Driver details"><span>AVAILABLE</span></th>
                  <th>SOLD</th>
                  <th>PRICE</th>
                  <th></th>
                </tr>
                
                <tr>
                  <td>PRESALE</td>
                  <td>66</td>
                  <td>44</td>
                  <td>0.07 ETH</td>
                  <td>
                    BUY NOW
                  </td>
                </tr>
                
                <tr>
                  <td>FIRST ISSUE</td>
                  <td>266</td>
                  <td>33</td>
                  <td>.08 ETH</td>
                  <td>FEBRUARY 27, 2022</td>
                </tr>
                
                <tr>
                  <td>RESERVED</td>
                  <td>44</td>
                  <td>44</td>
                  <td>TBA</td>
                  <td>TBA</td>
                </tr>
              </table>
            </div>
          </div>
          <div className='serie-sale'>
            <div className="gltf-viewer">
              <div className="gltf-content">

              </div>
              <p>"Playing with my hair"</p>
            </div>
            <div className="nft-details-container">
              <table className="responstable">
                <tr>
                  <th>RELEASE</th>
                  <th data-th="Driver details"><span>AVAILABLE</span></th>
                  <th>SOLD</th>
                  <th>PRICE</th>
                  <th></th>
                </tr>
                
                <tr>
                  <td>PRESALE</td>
                  <td>66</td>
                  <td>44</td>
                  <td>0.07 ETH</td>
                  <td>
                    BUY NOW
                  </td>
                </tr>
                
                <tr>
                  <td>FIRST ISSUE</td>
                  <td>266</td>
                  <td>33</td>
                  <td>.08 ETH</td>
                  <td>FEBRUARY 27, 2022</td>
                </tr>
                
                <tr>
                  <td>RESERVED</td>
                  <td>44</td>
                  <td>44</td>
                  <td>TBA</td>
                  <td>TBA</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='reward-container'>
        <div className='reward-section'>
          <p>Series Reward:</p>
          <i>Complete an entire series and receive the following:</i>
          <ul>
            <li>Special SERIES NFT awarded only to holders of complete series</li>
            <li>Access to Sommer's Personal Memory Vault.</li>
            <li>Invitation to regular meet and greets with Sommer in her Memory Vault.</li>
          </ul>
        </div>
        <div className='reward-section'>
          <p>Collection Reward:</p>
          <i>Complete an entire series and receive all of the above <i>PLUS</i>:</i>
          <ul>
            <li>Special COLLECTION NFT awarded only to holders of complete collection.</li>
            <li>One-on-one chat sessions with Sommer.</li>
          </ul>
        </div>
        <div className='reward-section'>
          <p>Roadmap for future release:</p>
          <ul>
            <li>SERIES B, featuring memories from Sommer's visit to Machu Picchu drops MARCH 5, 2022.</li>
            <li>Special, ultra-rare, one-of-one NFT "Becoming the Brand" announcement on MARCH 5, 2022.</li>
            <li>SERIES C, featuring memories from Sommer's 2019 trip to Tokyo drops MARCH 18, 2022.</li>
            <li>Future Series TBA, featuring memories from in around Sommer's home in Bondi Beach, Australia.</li>
            <li>Special, limited edition drop of Sommer's work-out routing, featuring special guests and celebrity trainers, launching in Q2, 2022.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Mint;
