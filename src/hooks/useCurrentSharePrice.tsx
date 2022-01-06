import {useState, useEffect} from 'react';
import useContract from './useContract';

export default function useCurrentSharePrice(
    projectId: string,
): [string, boolean] {
  const contract = useContract();
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<string>('0');
  useEffect(() => {
    async function getCurrentSharePrice() {
      const sharePrice = await contract.methods
          .getSharePriceFromNative(projectId)
          .call({});
      setResult(sharePrice);
      setLoading(false);
    }
    if (result === '0') {
      getCurrentSharePrice();
    }
  });
  return [result, loading];
}
