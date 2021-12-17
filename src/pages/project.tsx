import CheckoutBar from "../components/CheckoutBar";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { useRecoilState } from "recoil";
import { chainState } from "../store";

const Project = () => {
  const [chain] = useRecoilState(chainState);
  return (
    <div>
      <h3>Project name...</h3>
      <h2>Chain: {chain.chain}</h2>
      <CheckoutBar />
    </div>
  );
};
export default Project;
