import {useWeb3React} from '@web3-react/core';
import {useState, useEffect} from 'react';
import useContract from './useContract';

export default function usePortfolio(): [any, boolean] {
  const contract = useContract();
  const web3 = useWeb3React();
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<any>(null);
  useEffect(() => {
    async function getProjects() {
      if (web3.account == null) throw new Error('User not authenticated');
      const url = `https://deep-index.moralis.io/api/v2/${web3.account}/nft?chain=ropsten&format=decimal&token_addresses=${contract._address}`;
      const projectsQuery = await fetch(url, {
        headers: {
          // Shhhhhhhhhhhhhhhhh
          'X-API-Key':
            'Qf6mY2GGEuKeT4mMZtqAO4SWPYIUKbkw5MB82TzeHFf1zyIdKL3htOHBJPO4ncDc',
        },
      });
      // @ts-ignore
      const projectsQueryResult = await projectsQuery.json();
      const projects = await Promise.all(
          projectsQueryResult.result.map(async (item: any) => {
            const ipfs = await fetch(
                'https://' + item.token_uri + '.ipfs.dweb.link',
            );
            const totalSupply = await contract.methods
                .totalSupply(item.token_id)
                .call({});
            const sharePrice = await contract.methods
                .getSharePriceFromNative(item.token_id)
                .call({});
            return {
              ...item,
              ipfs: await ipfs.json(),
              totalSupply: totalSupply,
              pricePerShare: sharePrice,
            };
          }),
      );
      setResult(projects);
      setLoading(false);
    }
    if (result === null) {
      getProjects();
    }
  });
  return [result, loading];
}
