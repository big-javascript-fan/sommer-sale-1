/* eslint-disable sonarjs/no-identical-functions */
import {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {useRecoilState} from 'recoil';
import {chainState} from '../store';
import {useRoute} from 'wouter';
import en from '../localization/en';
import CheckoutBar from '../components/Checkout/CheckoutBar';
import usePropertyData from '../hooks/usePropertyData';
import useTotalSupply from '../hooks/useTotalSupply';
import useCurrentSharePrice from '../hooks/useCurrentSharePrice';
import {useWeb3React} from '@web3-react/core';
import useNativeLiquidity from '../hooks/useNativeLiquidity';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';
/**
 * @return {jsx} rendered component
 */
export default function Project() {
  const [open, setOpen] = useState(false);
  const web3React = useWeb3React();
  const [, parameters] = useRoute('/projects/:id');
  if (parameters == undefined) throw new Error('Params is undefined');
  const [property, loading] = usePropertyData(parameters.id);
  const [totalSupply] = useTotalSupply(parameters.id);
  const [pricePerShare] = useCurrentSharePrice(parameters.id);
  const [chain] = useRecoilState(chainState);
  const [nativeLiquidity] = useNativeLiquidity(parameters.id);
  if (parameters == undefined) {
    return (
      <div>
        <h1>{en.t('projectNotFound')}</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-900">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          ></Transition.Child>
        </Dialog>
      </Transition.Root>

      <main className="sm:pt-16">
        <div className="max-w-2xl px-4 py-10 mx-auto sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-1">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {property?.name}
          </h1>
        </div>
        {/* ---------------Image Gallery Section---------------- */}
        <div className="max-w-xl mx-auto mt-6 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-1 lg:gap-x-8 lg:px-8 sm:max-w-6xl">
          <Carousel>
            {property?.images.map((property) => {
              return (
                <div className="w-full overflow-hidden bg-gray-200 min-h-96 aspect-w-1 aspect-h-1 rounded-xl group-hover:opacity-75 lg:h-96 lg:aspect-none">
                  <img
                    src={property}
                    alt={property}
                    className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>

        {/* ---------------Details Section---------------- */}
        <div className="max-w-2xl px-4 pt-10 mx-auto sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-span-2">
            {property?.description.map((item) => {
              return (
                <>
                  <div>
                    <h2 className="mb-6 text-xl font-medium text-slate-50">
                      {item.title}
                    </h2>

                    <div className="mb-10 space-y-6">
                      <p className="text-base text-slate-300">{item.value}</p>
                    </div>
                  </div>
                </>
              );
            })}
            {/* ---------------Equity Section---------------- */}

            <div className="mt-10">
              <h2 className="text-xl font-medium text-slate-50">Equity</h2>
              <div className="my-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <dl className="grid grid-cols-1 gap-5">
                  <div
                    key="Total Supply"
                    className="px-4 py-5 overflow-hidden bg-gray-800 shadow rounded-2xl sm:p-6"
                  >
                    <dt className="text-sm font-medium truncate text-slate-300">
                      Total Supply
                    </dt>
                    <dd className="mt-1 text-xl font-semibold text-slate-50">
                      {totalSupply}
                    </dd>
                  </div>
                </dl>

                <dl className="grid grid-cols-1 gap-5">
                  <div
                    key="Token Name"
                    className="px-4 py-5 overflow-hidden bg-gray-800 shadow rounded-2xl sm:p-6"
                  >
                    <dt className="text-sm font-medium truncate text-slate-300">
                      Token Name
                    </dt>
                    <dd className="mt-1 text-xl font-semibold text-slate-50">
                      {property?.fractionToken.tokenName}
                    </dd>
                  </div>
                </dl>
                <dl className="grid grid-cols-1 gap-5">
                  <div
                    key="Total Value"
                    className="px-4 py-5 overflow-hidden bg-gray-800 shadow rounded-2xl sm:p-6"
                  >
                    <dt className="text-sm font-medium truncate text-slate-300">
                      Total Value
                    </dt>
                    <dd className="mt-1 text-xl font-semibold text-slate-50">
                      {web3React.library.utils.fromWei(
                          web3React.library.utils
                              .toBN(totalSupply)
                              .mul(web3React.library.utils.toBN(pricePerShare)),
                          'ether',
                      )}{' '}
                      {chain.chain}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* ---------------Stats Section---------------- */}

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 className="text-xl font-medium text-slate-50">Stats</h2>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
                <div
                  key="Liquidity"
                  className="px-4 py-5 overflow-hidden bg-gray-800 shadow rounded-2xl sm:p-6"
                >
                  <dt className="text-sm font-medium truncate text-slate-300">
                    Liquidity
                  </dt>
                  <dd className="mt-1 text-xl font-semibold text-slate-50">
                    {web3React.library.utils.fromWei(nativeLiquidity)}{' '}
                    {chain.chain}
                  </dd>
                </div>
              </dl>
            </section>

            {/* ---------------Attributes Section---------------- */}

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 className="text-xl font-medium text-slate-50">Attributes</h2>

              <div className="px-4 py-8 mt-5 border-2 sm:px-6 rounded-2xl border-slate-800">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                  {property?.attributes.map((item: any) => (
                    <div className="sm:col-span-1">
                      <dt className="text-gray-500 text-m">{item.key}</dt>
                      <dd className="mt-1 text-m text-slate-50">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            {/* --------------- Project Details Section---------------- */}

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 className="text-xl font-medium text-slate-50">
                Project Details
              </h2>

              <div className="px-4 py-8 mt-5 border-2 sm:px-6 rounded-2xl border-slate-800">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                  {property?.projectDetails.map((item: any) => (
                    <div className="sm:col-span-1">
                      <dt className="text-gray-500 text-m">{item.key}</dt>
                      <dd className="mt-1 text-m text-slate-50">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          </div>
          <CheckoutBar />
        </div>
      </main>
    </div>
  );
}
