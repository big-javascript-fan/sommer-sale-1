import {NetworkConnector} from '@web3-react/network-connector';

export const network = new NetworkConnector({
  urls: {
    // 3: 'https://speedy-nodes-nyc.moralis.io/84cd3bfb898d460caeeb53f9/eth/ropsten',
    3: 'https://eth-ropsten.alchemyapi.io/v2/yBTc2ik5u-cZE_RJFcXGIXvfwPb0kvsR',
    1: 'https://speedy-nodes-nyc.moralis.io/84cd3bfb898d460caeeb53f9/eth/mainnet',
    43113:
      'https://speedy-nodes-nyc.moralis.io/84cd3bfb898d460caeeb53f9/avalanche/testnet',
    43114:
      'https://speedy-nodes-nyc.moralis.io/84cd3bfb898d460caeeb53f9/avalanche/mainnet',
  },
  defaultChainId: 3,
});
