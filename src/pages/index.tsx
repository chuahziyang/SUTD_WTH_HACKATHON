import { useState } from "react";
import { Dialog } from "@headlessui/react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e0fadd] to-[#8fc089] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Find out more about our motivations behind this green initiative!{" "}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              GGSG
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Interested to do your part and save the Earth? Click below to find
              out more!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="relative isolate px-6 pt-14 lg:px-8">
            {/* Existing content */}
            <div className="page-break"></div>

            {/* New section */}
            <div className="m-6 bg-gray-100 py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Problem we are trying to solve and its significance
                  </p>
                </div>
                <div className="mt-10">
                  <div className="items-center justify-center lg:flex">
                    {/* Image */}
                    <div className="max-w-md flex-1">
                      <img
                        className="h-48 w-full rounded-md object-cover object-center shadow-lg"
                        src="https://example.com/your-image.jpg"
                        alt="Your Image"
                      />
                    </div>

                    <div className="mt-4 lg:ml-6 lg:mt-0">
                      <p className="text-xl text-gray-700">
                        Through this initiative, we aim to reduce our carbon
                        footprint while providing you an incentive to join us in
                        doing so.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of new section*/}
            {/* New section */}
            <div className="m-6 bg-gray-100 py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Our Solution
                  </p>
                </div>
                <div className="mt-10">
                  <div className="items-center justify-center lg:flex">
                    {/* Image */}
                    <div className="max-w-md flex-1">
                      <img
                        className="h-48 w-full rounded-md object-cover object-center shadow-lg"
                        src="https://example.com/your-image.jpg"
                        alt="Your Image"
                      />
                    </div>

                    <div className="mt-4 lg:ml-6 lg:mt-0">
                      <p className="text-xl text-gray-700">
                        We adopted features from different sources and combined
                        it onto one platform for you to track your progress and
                        earn rewards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of new section*/}
            {/* New section */}
            <div className="m-6 bg-gray-100 py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Key challenges
                  </p>
                </div>
                <div className="mt-10">
                  <div className="items-center justify-center lg:flex">
                    {/* Image */}
                    <div className="max-w-md flex-1">
                      <img
                        className="h-48 w-full rounded-md object-cover object-center shadow-lg"
                        src="https://example.com/your-image.jpg"
                        alt="Your Image"
                      />
                    </div>

                    <div className="mt-4 lg:ml-6 lg:mt-0">
                      <p className="text-xl text-gray-700">
                        Listed are some of the key challenges we face and we
                        welcome anyone to contact us with their proposed
                        solution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of new section*/}
            {/* New section */}
            <div className="mt-6 bg-gray-100 py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Scaling This Initiative
                  </p>
                </div>
                <div className="mt-10">
                  <div className="items-center justify-center lg:flex">
                    {/* Image */}
                    <div className="max-w-md flex-1">
                      <img
                        className="h-48 w-full rounded-md object-cover object-center shadow-lg"
                        src="https://example.com/your-image.jpg"
                        alt="Your Image"
                      />
                    </div>

                    <div className="mt-4 lg:ml-6 lg:mt-0">
                      <p className="text-xl text-gray-700">
                        Proposed are some ways we can scale our initiative and
                        reach a wider audience while serving a greater good. Do
                        contact us if you can help us achieve our goal!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of new section*/}
          </div>
        </div>
      </div>
    </div>
  );
}
