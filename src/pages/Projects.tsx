/**
 * @return {Array} fake data
 */
const ProjectsData = [
  {
    id: 1,
    name: 'XStairship Apartments',
    href: '/projects/id',
    price: '354 VST',
    imageSrc:
      'https://685firstaverentals.com/uploads/application/files/static-gallery/2/building.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '543.50 VST',
    imageSrc:
      'https://i.insider.com/5f08c2722618b952cd1e285f?width=1200&format=jpeg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '443 VST',
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgmvmilKZso_cYYxbiIPrNpxlmixJ_MTpUSzguX0vigvUm9LExTqcMRebDtEVztRXk6s&usqp=CAU',
    imageAlt:
      'Person using a pen to cross a task off a projectivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '124 VST',
    imageSrc:
      'https://inhabitat.com/wp-content/blogs.dir/1/files/2015/08/Park-Garden-exterior.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
];

/**
 * @return {jsx} rendered component
 */
export default function Projects() {
  return (
    <div className="">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-medium tracking-tight text-white">
          Projects
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {ProjectsData.map((project) => (
            <a key={project.id} href={project.href} className="group">
              <div className="w-full overflow-hidden bg-gray-200 aspect-w-2 aspect-h-1 rounded-3xl xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="object-cover object-center w-full h-48 group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-m text-slate-200">{project.name}</h3>
              <p className="mt-1 text-m text-slate-400">{project.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
