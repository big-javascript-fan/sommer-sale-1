const POLLING_INTERVAL = 12000
export const RPC_URLS: { [chainId: number]: string } = {
  1: 'https://mainnet.infura.io/v3/eb0ba49fd3b34cfea534acfdd536c160',
  4: 'https://rinkeby.infura.io/v3/eb0ba49fd3b34cfea534acfdd536c160'
}

export const ALCHEMY_KEY="vQ9DnPz9Y5hvVSn_wRuXGA3PthttmK6x"

export const NFT_CONTRACT_ADDRESS="0x46eA72609b43C644696b786A8EA0593a4c7697b6"

export const BABOONS_ADDRESS = "0x42535eC3Ed3120C3d2f51828795984493F44F80B"

export const INFURA_KEY="eb0ba49fd3b34cfea534acfdd536c160"

export const NETWORK="mainnet"

export const API_URL=""

export const ETHERSCAN_URL = NETWORK === 'mainnet' ? "https://etherscan.io/address/" + NFT_CONTRACT_ADDRESS : "https://" + NETWORK + ".etherscan.io/address/" + NFT_CONTRACT_ADDRESS