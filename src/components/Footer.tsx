/* eslint-disable sonarjs/no-identical-functions */
/**
 * To Do: must be replaced
 */
const footerNavigation = {
  about: [
    {name: 'Team', href: '#'},
    {name: 'Whitepaper', href: '#'},
    {name: 'Roadmap', href: '#'},
  ],
  company: [
    {name: 'Careers', href: '#'},
    {name: 'Terms & Conditions', href: '#'},
    {name: 'Privacy', href: '#'},
  ],
  docs: [{name: 'Airdrop', href: '#'}],
  contact: [
    {name: 'Telegram', href: '#'},
    {name: 'Twitter', href: '#'},
    {name: 'Instagram', href: '#'},
    {name: 'Discord', href: '#'},
  ],
};

/**
 * footer component
 * @return {jsx} rendered component
 */
export default function Footer() {
  return (
    <>
      <footer aria-labelledby="footer-heading" className="bg-gray-800">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-medium text-white">About</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.about.map((item) => {
                      return (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-300 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-medium text-white">Events</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.docs.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">
                    Social Media
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.contact.map((item) => {
                      return (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-300 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-white">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-300">
                The latest Updates, sent to your inbox.
              </p>
              <form className="flex mt-2 sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-white appearance-none rounded-md shadow-sm focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                />
                <div className="flex-shrink-0 ml-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-10 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              Copyright &copy; 2022 Vestana Foundation
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
