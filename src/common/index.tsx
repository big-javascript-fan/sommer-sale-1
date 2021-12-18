import Property from "../contract/Property.json";

export async function getContract(web3React: any) {
  const contractInstance = await new web3React.library.eth.Contract(
    Property.abi,
    //@ts-ignore
    Property_address[web3React.chainId]
  );
  return contractInstance;
}
