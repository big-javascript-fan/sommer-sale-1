import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SubmitButton from '../SubmitButton';
import FormInput from '../FormTextInput';
import en from '../../localization/en';
import usePurchaseShares from '../../hooks/usePurchaseShares';
import {useWeb3React} from '@web3-react/core';
import useConnectWallet from '../../hooks/useConnectWallet';

const CheckoutSchema = yup.object().shape({
  shares: yup.number().required(),
});

type CheckoutData = yup.InferType<typeof CheckoutSchema>;

interface PurchaseFormParams {
  purchasePriceWEI: string;
  id: string;
}

export default function PurchaseForm({
  purchasePriceWEI,
  id,
}: PurchaseFormParams) {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({resolver: yupResolver(CheckoutSchema)});
  const purchaseShares = usePurchaseShares();
  const shares = watch('shares', 100);
  const web3React = useWeb3React();
  const connectWallet = useConnectWallet();

  /**
   * @dev This is called when the form is submitted
   * @dev and handles purchasing or selling shares
   * @param {CheckoutData} data The data from the form
   */
  const onSubmit = async (data: CheckoutData) => {
    purchaseShares(data.shares, purchasePriceWEI, id);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 col-span-6 sm:col-span-3">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-slate-300"
          >
            Project Name
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
                en.t('invalidPurchaseShares') :
                en.t('purchaseShares', {tokens: parseInt(shares)})
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
