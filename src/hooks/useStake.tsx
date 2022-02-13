import {useWeb3React} from '@web3-react/core';
import useContract from './useContract';

export default function useStake() {
  const web3React = useWeb3React();
  const contract = useContract();
  return function stake(
      amount: number,
      price: string,
      projectId: string,
      endDate: string,
  ) {
    const value = web3React.library.utils
        .toBN(amount)
        .mul(web3React.library.utils.toBN(price));
    contract.methods.addLiquidity(projectId, amount, endDate).send({
      from: web3React.account,
      value: value,
    });
  };
}
