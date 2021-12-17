export interface IChain {
  name: string;
  chain: string;
  network: string;
  icon: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  chainId: number;
  networkId: number;
}
