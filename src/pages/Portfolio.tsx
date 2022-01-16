import {useWeb3React} from '@web3-react/core';
import PortfolioCard from '../components/PortfolioCard';
import usePortfolio from '../hooks/usePortfolio';
import {useRecoilState} from 'recoil';
import {chainState} from '../store';

/**
 * @return {jsx} rendered component
 */
export default function Portfolio() {
  const [projects, loading] = usePortfolio();
  const web3React = useWeb3React();
  const [chain] = useRecoilState(chainState);
  return loading == false ? (
      <>
        <div className="">
          <div className="max-w-4xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl font-medium tracking-tight text-white">
              Portfolio
            </h2>
            {projects.map((item: any) => (
              <PortfolioCard
                key={item.token_id}
                id={item.token_id}
                name={item.ipfs.name}
                imageSrc={item.ipfs.images[0]}
                description={item.ipfs.description[0].value} // TODO: Show each part of the description
                held={item.amount}
                symbol={item.ipfs.fractionToken.symbol}
                market_cap={web3React.library.utils.fromWei(
                    web3React.library.utils
                        .toBN(item.totalSupply)
                        .mul(web3React.library.utils.toBN(item.pricePerShare)),
                    'ether',
                )}
                worth={web3React.library.utils.fromWei(
                    web3React.library.utils
                        .toBN(item.amount)
                        .mul(web3React.library.utils.toBN(item.pricePerShare)),
                    'ether',
                )}
                pricePerShare={item.pricePerShare}
                apy="5%"
              />
            ))}
          </div>
        </div>
      </>
    ) : (
      <div>
        <h1>Loading...</h1>
      </div>
    );
}
