import {useState, useEffect} from 'react';
import useContract from './useContract';

export default function useStakedNative(
    projectId: string,
    address: string,
): [string, boolean] {
  const contract = useContract();
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<string>('0');
  useEffect(() => {
    async function getStakedNative() {
      const stakedNative = await contract.methods
          .calculateTotalETHLiquidityOfAddress(projectId, address)
          .call({});
      setResult(stakedNative);
      setLoading(false);
    }
    if (result === '0') {
      getStakedNative();
    }
  });
  return [result, loading];
}
