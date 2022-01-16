import {useState, useEffect} from 'react';
import useContract from './useContract';

export default function useStakedTokens(
    projectId: string,
    address: string,
): [string, boolean] {
  const contract = useContract();
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<string>('0');
  useEffect(() => {
    async function getStakedTokens() {
      const stakedTokens = await contract.methods
          .calculateTotalTokenLiquidityOfAddress(projectId, address)
          .call({});
      setResult(stakedTokens);
      setLoading(false);
    }
    if (result === '0') {
      getStakedTokens();
    }
  });
  return [result, loading];
}
