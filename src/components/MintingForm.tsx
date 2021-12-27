import en from '../localization/en.json';
/**
 * MintingForm component
 * @return {jsx} rendered component
 */
export default function MintingForm() {
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 col-start-1 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden ">
                {/* ----------------About----------------- */}
                <div className="px-4 py-5 space-y-6 sm:p-6">
                  <div className="mt-6 ">
                    <p className="mt-10 text-2xl font-medium tracking-tight text-white">
                      About
                    </p>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Project Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="form_input"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Project Type
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="form_input"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="Owner"
                      className="block text-sm font-medium text-slate-300"
                    >
                      Owner
                    </label>
                    <input
                      type="text"
                      name="Owner"
                      id="Owner"
                      autoComplete="Owner"
                      className="form_input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-slate-300"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="form_input"
                        placeholder="Type here"
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      {en.minting_form_description_field_info}
                    </p>
                  </div>
                  {/* ----------------Photos----------------- */}
                  <div className="mt-6 ">
                    <p className="mt-20 text-2xl font-medium tracking-tight text-white">
                      Photos
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300">
                      Upload photo here
                    </label>
                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="text-center space-y-1">
                        <svg
                          className="w-12 h-12 mx-auto text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative font-medium text-indigo-600 cursor-pointer rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* ----------------Attributes----------------- */}
                  <div className="mt-6 ">
                    <p className="mt-20 text-2xl font-medium tracking-tight text-white">
                      Attributes
                    </p>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Field Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="form_input"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-slate-300 "
                      >
                        Value
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="form_input"
                      />
                    </div>
                  </div>
                  {/* ----------------Token Details----------------- */}
                  <div className="mt-6 ">
                    <p className="mt-20 text-2xl font-medium tracking-tight text-white">
                      Token Details
                    </p>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Project-ID"
                        className="block text-sm font-medium text-slate-300 "
                      >
                        Project ID
                      </label>
                      <input
                        type="text"
                        name="project-id"
                        id="project-id"
                        autoComplete="given-name"
                        className="form_input"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Token-Name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Token Name
                      </label>
                      <input
                        type="text"
                        name="token-name"
                        id="token-name"
                        autoComplete="token-name"
                        className="form_input"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Token-Name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Symbol Name
                      </label>
                      <input
                        type="text"
                        name="Symbol-name"
                        id="Symbol-name"
                        autoComplete="Symbol-name"
                        className="form_input"
                      />
                    </div>
                  </div>

                  {/* ------------------ Token Fractions ------------------ */}
                  <div className="mt-6 ">
                    <p className="mt-20 text-2xl font-medium tracking-tight text-white">
                      Fractions
                    </p>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Total-Supply"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Total Supply
                      </label>
                      <input
                        type="text"
                        name="total-supply"
                        id="total-supply"
                        autoComplete="total-supply"
                        className="form_input"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Token-Name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Token Value
                      </label>
                      <input
                        type="text"
                        name="token-value"
                        id="token-value"
                        autoComplete="token-value"
                        className="form_input"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Token-Name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Total Value
                      </label>
                      <input
                        type="text"
                        name="total-value"
                        id="total-value"
                        autoComplete="total-value"
                        className="form_input"
                      />
                    </div>
                  </div>

                  {/* ------------------ Liquidity Pool ------------------ */}
                  <div className="mt-6 ">
                    <p className="mt-20 text-2xl font-medium tracking-tight text-white">
                      Add Liquidity
                    </p>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Total-Supply"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Amount
                      </label>
                      <input
                        type="text"
                        name="total-supply"
                        id="total-supply"
                        autoComplete="total-supply"
                        className="form_input"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Token-Name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Your Project Token
                      </label>
                      <input
                        type="text"
                        name="token-value"
                        id="token-value"
                        autoComplete="token-value"
                        className="form_input"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Token-Name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Amount
                      </label>
                      <input
                        type="text"
                        name="total-value"
                        id="total-value"
                        autoComplete="total-value"
                        className="form_input"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Token-Name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Select A Token
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="form_input"
                      >
                        <option>VST</option>
                        <option>AVAX</option>
                        <option>BNB</option>
                        <option>USDC</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* ----------------- Submit Form ----------------- */}
              <button type="submit" className="ml-6 submit_btn">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
