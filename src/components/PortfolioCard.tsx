import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import FormTextInput from './FormTextInput';
import SubmitButton from './SubmitButton';
import {useWeb3React} from '@web3-react/core';
import useStakedNative from '../hooks/useStakedNative';
import useStakedTokens from '../hooks/useStakedTokens';
import {useRecoilState} from 'recoil';
import {chainState} from '../store';
import useStake from '../hooks/useStake';

/**
 * @return {jsx} rendered component
 *  @param {obj} props data
 */

const StakeSchema = yup.object().shape({
  tokensToStake: yup.number().required(),
  secondsSince1970: yup.string().required(),
});

type StakeData = yup.InferType<typeof StakeSchema>;

export default function PortfolioCard(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({resolver: yupResolver(StakeSchema)});
  const web3React = useWeb3React();
  if (web3React.account == null) throw new Error('Not authenticated');
  const [stakedNative, loadingStakedNative] = useStakedNative(
      props.id,
      web3React.account,
  );
  const [stakedTokens, loadingStakedTokens] = useStakedTokens(
      props.id,
      web3React.account,
  );
  const stake = useStake();
  const tokensToStake = watch('tokensToStake', 100);
  const [chain] = useRecoilState(chainState);

  async function stakeTokens(data: StakeData) {
    await stake(
        data.tokensToStake,
        props.pricePerShare,
        props.id,
        data.secondsSince1970,
    );
  }
  return (
    <>
      <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
          {/* Description list*/}
          <section aria-labelledby="applicant-information-title">
            <div className="pt-5 pl-3 bg-gray-800 shadow sm:rounded-2xl">
              <div className=" flex items-center space-x-5">
                <div className="flex-shrink-0 pt-4 ml-6">
                  <div className="relative">
                    <img
                      className="h-24 w-36 rounded-xl"
                      src={props.imageSrc}
                      alt=""
                    />
                    <span
                      className="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="mb-1 text-2xl font-semibold text-slate-50">
                    {props.name}
                  </h1>
                  <p className="text-sm font-medium text-gray-500">Details</p>
                </div>
              </div>

              <div className="px-4 py-8 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Owned</dt>
                    <dd className="mt-1 text-sm text-slate-50">
                      {parseInt(props.held) + parseInt(stakedTokens)}{' '}
                      <span className="text-gray-400">{props.symbol}</span>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Worth</dt>
                    <dd className="mt-1 text-sm text-slate-50">
                      {props.worth}{' '}
                      <span className="text-gray-400">{chain.chain}</span>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Staked Tokens
                    </dt>
                    <dd className="mt-1 text-sm text-slate-50">
                      {stakedTokens}{' '}
                      <span className="text-gray-400">{props.symbol}</span>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Staked {chain.chain}
                    </dt>
                    <dd className="mt-1 text-sm text-slate-50">
                      {web3React.library.utils.fromWei(stakedNative, 'ether')}{' '}
                      <span className="text-gray-400">{chain.chain}</span>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Market Cap
                    </dt>
                    <dd className="mt-1 text-sm text-slate-50">
                      {props.market_cap}{' '}
                      <span className="text-gray-400">{chain.chain}</span>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">APY</dt>
                    <dd className="mt-1 text-sm text-slate-50">{props.apy}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-500">
                      {props.description}
                    </dd>
                  </div>
                  <form
                    className="flex h-1/2"
                    onSubmit={handleSubmit(stakeTokens)}
                  >
                    <SubmitButton text="Stake" />
                    <FormTextInput
                      type="number"
                      placeholder="Tokens to stake"
                      name="tokensToStake"
                      register={register}
                      default="100"
                      className="h-full ml-4"
                    />
                    <FormTextInput
                      type="number"
                      placeholder="Seconds since 1970 as end date"
                      name="secondsSince1970"
                      register={register}
                      default=""
                      className="h-full ml-4"
                    />
                    <h3 className="text-white">
                      Dual Stake Price:{' '}
                      {web3React.library.utils.fromWei(
                          web3React.library.utils
                              .toBN(props.pricePerShare)
                              .mul(web3React.library.utils.toBN(tokensToStake)),
                          'ether',
                      )}{' '}
                      {chain.chain}
                    </h3>
                  </form>
                </dl>
              </div>
              <div></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
