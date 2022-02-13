import {useWeb3React} from '@web3-react/core';
import {useState, useEffect} from 'react';
import {Property} from '../data';
import useContract from './useContract';

export default function usePropertyData(
    projectId: string,
): [Property | null, boolean] {
  const web3React = useWeb3React();
  const contract = useContract();
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<Property | null>(null);
  useEffect(() => {
    async function getPropertyData() {
      const uri = await contract.methods
          .uri(projectId)
          .call({from: web3React.account});
      const formattedURI = 'https://ipfs.io/ipfs/' + uri;
      const d = await fetch(formattedURI);
      const formattedData = await d.json();
      setResult(formattedData);
      setLoading(false);
    }
    if (result == null) {
      getPropertyData();
    }
  });
  return [result, loading];
}
