import {useWeb3React} from '@web3-react/core';
import useContract from './useContract';

export default function usePurchaseSHares() {
  const web3React = useWeb3React();
  const contract = useContract();
  return function purchaseShares(
      amount: number,
      price: string,
      projectId: string,
  ) {
    const value = web3React.library.utils
        .toBN(amount)
        .mul(web3React.library.utils.toBN(price));
    contract.methods.purchaseTokens(amount, projectId).send({
      from: web3React.account,
      value: value,
    });
  };
}
