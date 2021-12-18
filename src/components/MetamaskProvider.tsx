import React, {useEffect, useState} from 'react';
import {injected} from '../providers/injected';
import {network} from '../providers/fallback';
import {useWeb3React} from '@web3-react/core';

/**
 * @dev If the page is reloaded this try's to get the current
 * state from metamask and reload it into web3
 * @param {any} children is the components below this one in the tree
 * @return {any} children the children of this provider
 */
function MetamaskProvider({children}: { children: any }) {
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
  } = useWeb3React();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    injected
        .isAuthorized()
        .then(async (isAuthorized) => {
          if (isAuthorized && !networkError) {
            await activateNetwork(injected);
          } else {
            await activateNetwork(network);
          }
          setLoaded(true);
        })
        .catch(() => {
          setLoaded(true);
        });
  }, [activateNetwork, networkActive, networkError]);
  if (loaded) {
    return children;
  }
  return <>Loading</>;
}

export default MetamaskProvider;
