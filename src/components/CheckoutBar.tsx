import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SubmitButton from "./SubmitButton";
import FormInput from "./FormTextInput";
import { useWeb3React } from "@web3-react/core";
import Property from "../contract/Property.json";
import FormLabel from "./FormLabel";
import { Property_address } from "../data";
import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import FormCheckboxInput from "./FormCheckboxInput";
import { getContract } from "../common";

const CheckoutSchema = yup.object().shape({
  shares: yup.number().required(),
  isSelling: yup.boolean(),
});

type CheckoutData = yup.InferType<typeof CheckoutSchema>;

const CheckoutBar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(CheckoutSchema) });
  const web3React = useWeb3React();
  const [purchasePriceWEI, setPurchasePriceWEI] = useState(0);
  const [purchasePriceETH, setPurchasePriceETH] = useState(0);
  const [_, params] = useRoute("/project/:id");
  const onSubmit = async (data: CheckoutData) => {
    const contract = await getContract(web3React);
    if (data.isSelling) {
      sellShares(contract, data.shares);
    } else {
      purchaseShares(contract, data.shares);
    }
  };
  async function purchaseShares(contract: any, shares: number) {
    const val = web3React.library.utils
      .toBN(shares)
      .mul(web3React.library.utils.toBN(purchasePriceWEI));
    if (params == null) throw new Error("Invalid project");
    contract.methods.purchaseShares(shares, params.id).estimateGas({
      from: web3React.account,
      value: val,
    });
  }
  async function sellShares(contract: any, shares: number) {
    console.warn("Not implemented yet");
  }
  async function getPricePerShare() {
    const contract = new web3React.library.eth.Contract(
      Property.abi,
      //@ts-ignore
      Property_address[web3React.chainId]
    );
    if (params == null) throw new Error("Invalid project");
    const result = await contract.methods.getPricePerShare(params.id).call({});
    setPurchasePriceWEI(result);
    setPurchasePriceETH(web3React.library.utils.fromWei(result, "ether"));
  }
  useEffect(() => {
    getPricePerShare();
  });
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormLabel label="Check if you are selling" />
      <FormCheckboxInput name="isSelling" register={register} />
      <FormInput
        default={100}
        placeholder="Shares"
        name="shares"
        type="number"
        register={register}
      />
      <h2>Price per share: {purchasePriceETH}</h2>
      {/* errors will return when field validation fails  */}
      {errors.shares && <span>This field is required</span>}

      <SubmitButton text="Submit" />
    </form>
  );
};
export default CheckoutBar;
