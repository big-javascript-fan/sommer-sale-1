import React from 'react';
/**
 * @return {Array} fake data
 */
const ProtfolioProjects = [
  {
    id: 1,
    name: 'XStairship Apartments',
    href: '#',
    price: '354 VST',
    imageSrc:
      'https://685firstaverentals.com/uploads/application/files/static-gallery/2/building.jpg',
    imageAlt: 'alt text',
    description:
      'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit',
    token_amount: 140,
    token_value: 450,
    total_value: '$120,555',
    apy: '23%',
  },
];

/**
 * @return {jsx} rendered component
 *  @param {obj} props data
 */
export default function PortfolioCard(props) {
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
                    <dt className="text-sm font-medium text-gray-500">
                      Token Amount
                    </dt>
                    <dd className="mt-1 text-sm text-slate-50">
                      {props.token_amount}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Current Token Value
                    </dt>
                    <dd className="mt-1 text-sm text-slate-50">
                      {props.token_value}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Total Value
                    </dt>
                    <dd className="mt-1 text-sm text-slate-50">
                      {props.total_value}
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
