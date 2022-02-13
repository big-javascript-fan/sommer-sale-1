import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RecoilRoot} from 'recoil';
import MetamaskProvider from './components/MetamaskProvider';
import ChainProvider from './components/ChainProvider';
import {Web3ReactProvider} from '@web3-react/core';
import Web3 from 'web3';

/**
 *
 * @param {any} provider The provider to use when initializing
 * web3 like Injected or Network
 * @dev Returns a web3 instance for web3-react
 * @return {any} The web3 instance
 */
function getLibrary(provider: any) {
  return new Web3(provider);
}

ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot>
        <Web3ReactProvider getLibrary={getLibrary}>
          <MetamaskProvider>
            <ChainProvider>
              <App />
            </ChainProvider>
          </MetamaskProvider>
        </Web3ReactProvider>
      </RecoilRoot>
    </React.StrictMode>,
    document.querySelector('#root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
