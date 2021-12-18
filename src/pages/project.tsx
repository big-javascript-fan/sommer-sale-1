import CheckoutBar from "../components/CheckoutBar";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { useRecoilState } from "recoil";
import { chainState } from "../store";
import { useRoute } from "wouter";
import Property from "../contract/Property.json";

const Project = () => {
  const [chain] = useRecoilState(chainState);
  const [match, params] = useRoute("/project/:id");
  const web3React = useWeb3React();


  if (params == null) {
    return (
      <div>
        <h1>Project not found</h1>
      </div>
    );
  }
  return (
    <div>
      <h3>Project name...</h3>
      <h2>Chain: {chain.chain}</h2>
      <h2>ID: {params.id}</h2>
      <CheckoutBar />
    </div>
  );
};
export default Project;
