import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SubmitButton from './SubmitButton';
import FormInput from './FormTextInput';
import {useWeb3React} from '@web3-react/core';
import Property from '../contract/Property.json';
import FormLabel from './FormLabel';
import {useEffect, useState} from 'react';
import {useRoute} from 'wouter';
import FormCheckboxInput from './FormCheckboxInput';
import {getContract} from '../common';
import {propertyAddress} from '../data';
import en from '../constants/en.json';

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
    formState: {errors},
  } = useForm({resolver: yupResolver(CheckoutSchema)});
  const web3React = useWeb3React();
  const [purchasePriceWEI, setPurchasePriceWEI] = useState(0);
  const [purchasePriceETH, setPurchasePriceETH] = useState(0);
  const [, parameters] = useRoute('/project/:id');
  const isSellingWatch = watch('isSelling', false);
  /**
   * @dev This is called when the form is submitted
   * @dev and handles purchasing or selling shares
   * @param {CheckoutData} data The data from the form
   */
  const onSubmit = async (data: CheckoutData) => {
    const contract = await getContract(web3React);
    if (data.isSelling) {
      sellShares(contract, data.shares);
    } else {
      purchaseShares(contract, data.shares);
    }
  };
  /**
   *
   * @param {any} contract The contract instance to use when purchasing shares
   * @param {number} shares The amount of shares to purchase
   */
  async function purchaseShares(contract: any, shares: number) {
    const value = web3React.library.utils
        .toBN(shares)
        .mul(web3React.library.utils.toBN(purchasePriceWEI));
    if (parameters == undefined) throw new Error('Invalid project');
    contract.methods.purchaseShares(shares, parameters.id).send({
      from: web3React.account,
      value: value,
    });
  }
  /**
   * @dev Handles selling shares for the user
   * @param {any} contract The contract to use when selling shares
   * @param {shares} shares The amount of shares to sell
   */
  async function sellShares(contract: any, shares: number) {
    if (parameters == undefined) throw new Error('Invalid project');
    contract.methods
        .sellShares(shares, parameters.id)
        .send({from: web3React.account});
  }
  /**
   * @dev Get's the price per share for a given property
   */
  async function getPricePerShare() {
    const contract = new web3React.library.eth.Contract(
        Property.abi,
        // @ts-ignore
        propertyAddress[web3React.chainId],
    );
    if (parameters == undefined) throw new Error('Invalid project');
    const result = await contract.methods
        .getPricePerShare(parameters.id)
        .call({});
    setPurchasePriceWEI(result);
    setPurchasePriceETH(web3React.library.utils.fromWei(result, 'ether'));
  }
  useEffect(() => {
    getPricePerShare();
  });
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      className="flex flex-col items-center justify-center"
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

      {isSellingWatch ? (
        <SubmitButton text={en.sellShares} />
      ) : (
        <SubmitButton text={en.purchaseShares} />
      )}
    </form>
  );
};
export default CheckoutBar;
