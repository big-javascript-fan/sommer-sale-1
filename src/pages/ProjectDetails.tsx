/* eslint-disable sonarjs/no-identical-functions */
import {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';

/**
 * @return {object} fake data
 */
const project = {
  name: 'XStairship Apartments',
  href: '#',
  images: [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/204212834.jpg?k=1df1549ca9970f567dfb02804d7b2fdb9b4237dfde9d27730b41665d2f493f83&o=&hp=1',
      alt: 'img1 ',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/204212359.jpg?k=68c978e738af310463d04f379b3bb48910d853ebc3003965f6c17e063f1ef0e0&o=&hp=1',
      alt: 'img2',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/204212391.jpg?k=9a6c2d2879080b97868c67263bcf89fd62d70ef6ae2bb1f4b6047206048a81ac&o=&hp=1',
      alt: 'img3',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/204212872.jpg?k=385ed4f30e45a403c4785c256d964938cd9273d9f4b2236a35d90704deadea0e&o=&hp=1',
      alt: 'img4',
    },
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi mauris, elementum finibus neque at, feugiat fermentum quam. Nunc vitae dui a arcu congue tincidunt. Phasellus sit amet molestie odio, vitae blandit est. Aenean a massa ac ligula luctus finibus. Nullam ullamcorper ante augue. Praesent at mattis lectus.',
  highlights: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'],
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum miLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum miLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi',
};

const tokenDetails = [
  {name: 'Token Name', value: 'XST5734'},
  {name: 'Token Value', value: '183 VST'},
  {name: 'Total Supply', value: '62000'},
  {name: 'Total Value', value: '154,788'},
];

const stats = [
  {name: 'Liqudity', value: '$748,485.48'},
  {name: 'Volume (24 hours)', value: '$1,815.21'},
  {name: 'Volume (7 days)', value: '$15,870,26'},
  {name: 'Fees (24 Hours)', value: '$3,540.40'},
];

const attributes = [
  {name: 'Width', value: '45'},
  {name: 'Height', value: '180'},
  {name: 'Depth', value: '470'},
  {name: 'Bedrooms', value: '2'},
  {name: 'Floors', value: '6'},
  {name: 'Units', value: '12'},
];
/**
 * @return {jsx} rendered component
 */
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
/**
 * @return {jsx} rendered component
 */
export default function Project() {
  const [open, setOpen] = useState(false);

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
        <div className="max-w-2xl px-4 py-10 mx-auto sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {project.name}
          </h1>
        </div>
        {/* ---------------Image Gallery Section---------------- */}'
        <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="hidden overflow-hidden rounded-lg aspect-w-3 aspect-h-4 lg:block">
            <img
              src={project.images[0].src}
              alt={project.images[0].alt}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
              <img
                src={project.images[1].src}
                alt={project.images[1].alt}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
              <img
                src={project.images[2].src}
                alt={project.images[2].alt}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={project.images[3].src}
              alt={project.images[3].alt}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
        {/* ---------------Details Section---------------- */}
        <div className="max-w-2xl px-4 pt-10 mx-auto sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-span-2">
            {/* Description and details */}
            <div>
              <h2 className="text-xl font-medium text-slate-50">Details</h2>

              <div className="mt-4 space-y-6 ">
                <p className="text-base text-slate-300">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-medium text-slate-50">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 text-sm list-disc space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-slate-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ---------------Equity Section---------------- */}

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 className="text-xl font-medium text-slate-50">Equity</h2>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
                {tokenDetails.map((item) => (
                  <div
                    key={item.name}
                    className="px-4 py-5 overflow-hidden bg-gray-800 shadow rounded-2xl sm:p-6"
                  >
                    <dt className="text-sm font-medium truncate text-slate-300">
                      {item.name}
                    </dt>
                    <dd className="mt-1 text-xl font-semibold text-slate-50">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* ---------------Stats Section---------------- */}

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 className="text-xl font-medium text-slate-50">Stats</h2>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.name}
                    className="px-4 py-5 overflow-hidden bg-gray-800 shadow rounded-2xl sm:p-6"
                  >
                    <dt className="text-sm font-medium truncate text-slate-300">
                      {item.name}
                    </dt>
                    <dd className="mt-1 text-xl font-semibold text-slate-50">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* ---------------Attributes Section---------------- */}

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 className="text-xl font-medium text-slate-50">Attributes</h2>

              <div className="px-4 py-8 mt-5 border-2 sm:px-6 rounded-2xl border-slate-800">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                  {attributes.map((item) => (
                    <div className="sm:col-span-1">
                      <dt className="text-gray-500 text-m">{item.name}</dt>
                      <dd className="mt-1 text-m text-slate-50">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          </div>
          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-span-1">
            {/* ---------------Buy Section------------------ */}

            <h3 className="text-xl font-medium text-slate-50">Buy Equity</h3>

            <div className="px-4 py-5 mt-5 overflow-hidden border-2 shadow rounded-2xl sm:p-6 border-slate-800">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="number_of_tokens"
                  className="block text-sm font-medium text-slate-300"
                >
                  Number of Tokens
                </label>
                <input
                  type="text"
                  name="number_of_tokens"
                  id="number_of_tokens"
                  autoComplete="number_of_tokens"
                  className="form_input"
                />
              </div>
              <button type="submit" className="mt-5 submit_btn">
                Buy
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
