import {useState, useEffect} from 'react';
import useContract from './useContract';

export default function useCurrentSharePrice(
    projectId: string,
): [string, boolean] {
  const contract = useContract();
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<string>('0');
  useEffect(() => {
    async function getTotalSupply() {
      const totalSupply = await contract.methods
          .totalSupply(projectId)
          .call({});
      setResult(totalSupply);
      setLoading(false);
    }
    if (result === '0') {
      getTotalSupply();
    }
  });
  return [result, loading];
}
