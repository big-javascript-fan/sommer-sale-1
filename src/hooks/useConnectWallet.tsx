import {UnsupportedChainIdError, useWeb3React} from '@web3-react/core';
import {injected} from '../providers/injected';
import {store} from 'react-notifications-component';

/**
 * @dev This hook provides a function that can be used to connect the user's wallet
 * @return {function} A function that can be used in the code to connect the user's wallet
 */
export default function useConnectWallet() {
  const web3 = useWeb3React();
  /**
   * @dev Handles connecting the user's wallet
   */
  return async function connectMetamask() {
    // @ts-ignore
    if (typeof window.ethereum !== 'undefined') {
      await web3.activate(injected, () => {
        const isUnsupportedChainIdError =
          web3.error instanceof UnsupportedChainIdError;
        if (isUnsupportedChainIdError == true) {
          store.addNotification({
            title: 'Warning',
            message: 'Unsupported chain',
            type: 'info',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
              duration: 1000,
              onScreen: true,
            },
          });
        }
      });
    } else {
      store.addNotification({
        title: 'Info',
        message: 'Please install MetaMask.',
        type: 'info',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
    }
  };
}
