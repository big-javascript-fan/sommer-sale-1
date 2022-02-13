import Web3 from 'web3';
import { ethers } from "ethers"
import Web3Modal from "web3modal"
import { INFURA_KEY, ALCHEMY_KEY, NETWORK, NFT_CONTRACT_ADDRESS, BABOONS_ADDRESS } from '../config/constants'
import SNAILS_ABI from '../config/abi/SNAILS_ABI.json'
import BABOONS_ABI from '../config/abi/BABOONS.json'

export const NODE_API_KEY = INFURA_KEY || ALCHEMY_KEY;
const isInfura = !!INFURA_KEY;
const CHAIN_ID = 4
const providerOptions = {
  walletconnect: {
    // package: WalletConnectProvider,
    options: {
		rpc: {
			4: 'https://rinkeby.infura.io/v3/' + NODE_API_KEY
		},
		network: 'rinkeby',
		chainId: 4,
		infuraId: NODE_API_KEY,
    }
  }
};

export const getBalance = async () => {
	const provider = 'https://' + NETWORK + '.infura.io/v3/' + INFURA_KEY
	const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
	const contract = new Web3Client.eth.Contract(SNAILS_ABI, NFT_CONTRACT_ADDRESS);
	const result = await contract.methods.totalSupply().call();
	return result
}

export const getPastEvents = async () => {
	const web3 = new Web3(
		new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/eb0ba49fd3b34cfea534acfdd536c160")
	  );
	const contract = new web3.eth.Contract(BABOONS_ABI, BABOONS_ADDRESS);

	console.log('all events called');
	// All events handler
	contract.events
	.allEvents()
	.on('data', async event => {
		console.log(event);

		// if (event === 'PublicSale')
		//   this.eventEmitter.emit('PublicSale', event);

		const transactionPromise = web3.eth.getTransaction(
		event.transactionHash
		);

		const transactionReceiptPromise = web3.eth.getTransactionReceipt(
		event.transactionHash
		);

		const blockDataPromise = web3.eth.getBlock(event.blockNumber);

		const [transaction, transactionReceipt, blockData] =
		await Promise.all([
			transactionPromise,
			transactionReceiptPromise,
			blockDataPromise
		]);
		console.log(transaction);
		// await this.createTransaction({
		//   contractId,
		//   transaction,
		//   transactionReceipt,
		//   blockData,
		//   abi,
		//   isZksyncTx: false
		// });
	});
	const txHashListFromAPI = await contract
	.getPastEvents('allEvents', {
	  fromBlock: 63140,
	  toBlock: 'latest'
	})
	.then(events =>
	  events.map(({ transactionHash }) => transactionHash)
	);
	console.log(txHashListFromAPI);
}

export const getTotal = async () => {
    const provider = 'https://' + NETWORK + '.infura.io/v3/' + INFURA_KEY
    const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
    const contract = new Web3Client.eth.Contract(SNAILS_ABI, NFT_CONTRACT_ADDRESS);
    const result = await contract.methods.supply().call();
    return result
}

export const getStatus = async () => {
    const provider = 'https://' + NETWORK + '.infura.io/v3/' + INFURA_KEY
    const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
    const contract = new Web3Client.eth.Contract(SNAILS_ABI, NFT_CONTRACT_ADDRESS);
    const result = await contract.methods.isSaleActive().call();
    return result
}

export const mint = async () => {
	const web3modal = new Web3Modal({
		network: "rinkeby",
		cacheProvider: false, // optional
		providerOptions, // required
	})
    const connection = await web3modal.connect()
	console.log(connection);
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, SNAILS_ABI, signer)
    const transaction = await contract.claim()

    const result = await transaction.wait()
    console.log(result)
}