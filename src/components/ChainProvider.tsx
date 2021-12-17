import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { chainState } from "../store";
import { IChain } from "../types/chain";
function ChainProvider({ children }: { children: any }) {
  const web3React = useWeb3React();
  const [loaded, setLoaded] = useState(false);
  const [chain, setChain] = useRecoilState(chainState);

  async function getChain(chainId: number) {
    // If we can not get the chain Id default to ETH
    if (chainId === undefined || chainId === null) chainId = 1;
    const chainQuery = await fetch("https://chainid.network/chains.json");
    const chains = await chainQuery.json();
    const chain = chains.filter(
      (chain: IChain) => chain.chainId === chainId
    )[0];
    setChain(chain);
    setLoaded(true);
  }

  useEffect(() => {
    var chainId = web3React.chainId;
    if (chainId === undefined) throw new Error("ChainId is null");
    getChain(chainId);
    //@ts-ignore
    if (window.ethereum) {
      //@ts-ignore
      window.ethereum.on("chainChanged", (chainId) => {
        getChain(parseInt(chainId, 16));
      });
    }
  }, []);
  if (loaded) {
    return children;
  }
  return <>Loading</>;
}
export default ChainProvider;
