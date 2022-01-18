import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SubmitButton from '../SubmitButton';
import FormInput from '../FormTextInput';
import en from '../../localization/en';
import useSellShares from '../../hooks/useSellShares';
import useConnectWallet from '../../hooks/useConnectWallet';
import {useWeb3React} from '@web3-react/core';

const CheckoutSchema = yup.object().shape({
  shares: yup.number().required(),
});

type CheckoutData = yup.InferType<typeof CheckoutSchema>;

interface SellFormParams {
  purchasePriceWEI: string;
  id: string;
}

export default function SellForm({purchasePriceWEI, id}: SellFormParams) {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({resolver: yupResolver(CheckoutSchema)});
  const sellShares = useSellShares();
  const shares = watch('shares', 100);
  const connectWallet = useConnectWallet();
  const web3React = useWeb3React();

  /**
   * @dev This is called when the form is submitted
   * @dev and handles purchasing or selling shares
   * @param {CheckoutData} data The data from the form
   */
  const onSubmit = async (data: CheckoutData) => {
    sellShares(data.shares, id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-slate-300"
          >
            Shares
          </label>
          <FormInput
            default={100}
            placeholder="Shares"
            name="shares"
            type="number"
            register={register}
          />
        </div>

        {web3React.account != null ? (
          <SubmitButton
            disabled={parseInt(shares) == 0 || shares == ''}
            text={
              parseInt(shares) == 0 || shares == '' ?
                en.t('invalidSellShares') :
                en.t('sellShares', {tokens: parseInt(shares)})
            }
          />
        ) : (
          <SubmitButton
            onClick={() => connectWallet()}
            text={en.t('connect_wallet')}
          />
        )}
      </form>
    </div>
  );
}
