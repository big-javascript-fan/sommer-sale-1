import MintingForm from '../components/MintingForm';
/**
 * @return {jsx} rendered component
 */
const Mint = () => {
  return (
    <>
      <div className="">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-medium tracking-tight text-white">
            Add New Listing
          </h2>

          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <MintingForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default Mint;
