import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {XIcon} from '@heroicons/react/outline';
import t from '../localization/en.json';
import data from '../constants/const.json';

/**
 * @return {jsx} rendered component
 */
export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 p-2 transition transform origin-top md:hidden"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img className="w-auto h-8" src="" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-5 mt-6">
                  <a
                    href="#"
                    className="block w-full px-4 py-3 font-medium text-center text-white bg-indigo-600 shadow rounded-md hover:bg-indigo-700"
                  >
                    Connect Wallet
                  </a>
                </div>
                <div className="px-5 mt-6">
                  <p className="text-base font-medium text-center text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-gray-900 hover:underline">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-6xl font-semibold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">{t.landing_page_hero_title}</span>
                    <span className="block my-6 text-indigo-400">
                      {t.landing_page_hero_title_colored}
                    </span>
                  </h1>
                  <p className="mt-5 text-base text-gray-300 sm:mt-6 sm:text-xl lg:text-lg xl:text-xl">
                    {t.landing_page_hero_subtitle}
                  </p>

                  <div className="mt-10 sm:mt-12">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <a href={data.social_media.telegram} target="_blank">
                          <button className="w-full px-4 py-3 font-medium text-gray-700 bg-indigo-100 shadow rounded-md hover:bg-indigo-600 hover:text-slate-300">
                            Telegram
                          </button>
                        </a>
                      </div>
                      <div className="col-span-1">
                        <a href={data.social_media.twitter} target="_blank">
                          <button className="w-full px-4 py-3 font-medium text-gray-700 bg-indigo-100 shadow rounded-md hover:bg-indigo-600 hover:text-slate-300">
                            Twitter
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
