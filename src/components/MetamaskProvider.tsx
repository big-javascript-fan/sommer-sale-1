import React, { useEffect, useState } from "react";
import { injected } from "../providers/injected";
import { network } from "../providers/fallback";
import { useWeb3React } from "@web3-react/core";

function MetamaskProvider({ children }: { children: any }) {
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
