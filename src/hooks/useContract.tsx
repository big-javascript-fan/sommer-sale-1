import {useWeb3React} from '@web3-react/core';
import Property from '../contract/Property.json';
import {propertyAddresses} from '../data';

export default function useContract() {
  const web3React = useWeb3React();
  return new web3React.library.eth.Contract(
      Property.abi,
      // @ts-ignore
      propertyAddresses[web3React.chainId],
  );
}
