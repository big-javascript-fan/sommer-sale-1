import Property from '../contract/Property.json';
import {propertyAddresses} from '../data';

/**
 * @dev This is used to get an instance of the current correct contract
 * @param {any} web3React The web3-react instance that is used to get the
 * contract
 * @return {any} The contract instance
 */
export async function getContract(web3React: any) {
  return await new web3React.library.eth.Contract(
      Property.abi,
      // @ts-ignore
      propertyAddresses[web3React.chainId],
  );
}
