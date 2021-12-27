import PortfolioCard from '../components/PortfolioCard';
/**
 * @return {jsx} rendered component
 */
const ProtfolioData = [
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
  {
    id: 2,
    name: 'Office Building 789',
    href: '#',
    price: '477 VST',
    imageSrc:
      'https://images1.loopnet.com/i2/z4xRBRN0MTOIK6gqQYrnp3kpDEpkn5Pkodn8E9ZaRIw/106/image.jpg',
    imageAlt: 'alt text',
    description:
      'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit',
    token_amount: 152,
    token_value: 880,
    total_value: '$984,555',
    apy: '12%',
  },
  {
    id: 3,
    name: 'Multifamily apartment SF',
    href: '#',
    price: '477 VST',
    imageSrc:
      'https://images.squarespace-cdn.com/content/v1/5982634e46c3c405980b17d3/1543809012856-AMRVQPJHNIILIBMI5T5W/2400X1600_0011_nancy-stephen-grand-family-home.jpg',
    imageAlt: 'alt text',
    description:
      'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit',
    token_amount: 152,
    token_value: 880,
    total_value: '$984,555',
    apy: '12%',
  },
];

/**
 * @return {jsx} rendered component
 */
export default function Portfolio() {
  return (
    <>
      <div className="">
        <div className="max-w-4xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-medium tracking-tight text-white">
            Portfolio
          </h2>
          {ProtfolioData.map((item) => (
            <PortfolioCard
              name={item.name}
              price={item.price}
              imageSrc={item.imageSrc}
              description={item.description}
              token_amount={item.token_amount}
              token_value={item.token_value}
              total_value={item.total_value}
              apy={item.apy}
            />
          ))}
        </div>
      </div>
    </>
  );
}
