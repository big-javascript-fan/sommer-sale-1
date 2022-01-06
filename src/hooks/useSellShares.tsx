import {useWeb3React} from '@web3-react/core';
import useContract from './useContract';

/**
 * @dev This hook provides a function that can be used to sell shares
 * @return {function} A function that can be used in the code to sell shares
 */
export default function useSellShares() {
  const web3React = useWeb3React();
  const contract = useContract();
  /**
   * @dev Handles selling shares for the user
   * @param {shares} shares The amount of shares to sell
   * @param {id} id The id of the token to sell shares for
   */
  return function sellShares(shares: number, id: string) {
    contract.methods.sellTokens(shares, id).send({from: web3React.account});
  };
}
