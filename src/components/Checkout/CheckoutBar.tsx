import {useState} from 'react';
import SellForm from './SellForm';
import PurchaseForm from './PurchaseForm';
import useCurrentSharePrice from '../../hooks/useCurrentSharePrice';
import {useRoute} from 'wouter';
import {useWeb3React} from '@web3-react/core';
import {useRecoilState} from 'recoil';
import {chainState} from '../../store';
import en from '../../localization/en';

const CheckoutBar = () => {
  const [isSelling, setIsSelling] = useState(false);
  const [, parameters] = useRoute('/project/:id');
  if (parameters == undefined) throw new Error('Project not found');
  const [pricePerShare] = useCurrentSharePrice(parameters.id);
  const web3React = useWeb3React();
  const [chain] = useRecoilState(chainState);

  return (
    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-span-1">
      <h3 className="text-xl font-medium text-slate-50">
        {en.t('purchaseHeaderText')}
      </h3>

      <div className="px-4 py-5 mt-5 overflow-hidden border-2 shadow rounded-2xl sm:p-6 border-slate-800">
        <div>
          <button
            className={`tab_btn ${
              isSelling == false ? 'tab_btn_selected' : ''
            }`}
            onClick={() => setIsSelling(false)}
          >
            Buy
          </button>
          <button
            className={`tab_btn ${isSelling == true ? 'tab_btn_selected' : ''}`}
            onClick={() => setIsSelling(true)}
          >
            Sell
          </button>
        </div>
        {isSelling == true ? (
          <SellForm purchasePriceWEI={pricePerShare} id={parameters.id} />
        ) : (
          <PurchaseForm purchasePriceWEI={pricePerShare} id={parameters.id} />
        )}
        <h2 className="text-center text-white">
          Price per share:{' '}
          {web3React.library.utils.fromWei(pricePerShare, 'ether') +
            ' ' +
            chain.chain}
        </h2>
      </div>
    </div>
  );
};
export default CheckoutBar;
