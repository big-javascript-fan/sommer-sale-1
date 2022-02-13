import {useWeb3React} from '@web3-react/core';
import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {chainState} from '../store';
import {IChain} from '../types/chain';

/**
 *
 * @param {any} children the children of this provider
 * @return {any} children the children of this provider
 * @dev Get's the current chain and set's the chainState to that
 */
function ChainProvider({children}: { children: any }) {
  const web3React = useWeb3React();
  const [loaded, setLoaded] = useState(false);
  const [, setChain] = useRecoilState(chainState);

  /**
   * @param {number} chainId The Id of the chain to gather data on
   * @dev Get's the data associated with a specific chain Id
   */
  async function getChain(chainId: number | null | undefined) {
    // If we can not get the chain Id default to ETH
    if (chainId === undefined || chainId === null) chainId = 4;
    const chainQuery = await fetch('https://chainid.network/chains.json');
    const chains = await chainQuery.json();
    const chain = chains.find((chain: IChain) => chain.chainId === chainId);
    setChain(chain);
    setLoaded(true);
  }

  useEffect(() => {
    const chainId = web3React.chainId;
    // if (chainId === undefined) throw new Error('ChainId is null');
    getChain(chainId);
    // @ts-ignore
    if (window.ethereum) {
      // @ts-ignore
      window.ethereum.on('chainChanged', (chainId) => {
        getChain(Number.parseInt(chainId, 16));
      });
    }
  }, []);
  if (loaded) {
    return children;
  }
  return <>Loading</>;
}
export default ChainProvider;
