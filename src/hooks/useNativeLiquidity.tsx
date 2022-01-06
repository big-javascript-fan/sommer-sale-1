import {useState, useEffect} from 'react';
import useContract from './useContract';

export default function useNativeLiquidity(
    projectId: string,
): [string, boolean] {
  const contract = useContract();
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<string>('0');
  useEffect(() => {
    async function getNativeLiquidity() {
      const totalLiquidity = await contract.methods
          .calculateTotalETHLiquidityOfToken(projectId)
          .call({});
      setResult(totalLiquidity);
      setLoading(false);
    }
    if (result === '0') {
      getNativeLiquidity();
    }
  });
  return [result, loading];
}
