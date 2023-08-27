import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Footer from "../components/footer";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-lime-200 via-transparent to-sky-200">
      <header className="absolute inset-x-0 top-0 z-50 rounded-md bg-white">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="img/logo.svg" alt="" />
            </Link>
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
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
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
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-10 sm:py-40 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Find out more about our motivations behind this green initiative!{" "}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              GoGreen
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Interested to do your part and save the Earth? Click below to find
              out more!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/signup"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="relative isolate px-6 lg:px-2">
            {/* Existing content */}
            {/* New section */}
            <div className="m-6 rounded-lg bg-white py-12">
              <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  <p className="mx-auto pb-4 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Problem we are trying to solve and its significance
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  {/* Image */}
                  <div className="w-1/4">
                    <img
                      className=" rounded-md object-fill shadow-lg"
                      src="https://cdn.discordapp.com/attachments/692788133778948155/1144987034163892316/pic1.png"
                      alt="pic1"
                    />
                  </div>
                  <div className="mx-3.5 mt-4 w-4/5">
                    <p className="text-xl text-gray-700">
                      We aim to promote inclusive, safe, resilient, and
                      sustainable transport systems for all By reducing carbon
                      emissions and promoting more sustainable transportation
                      modes to combat climate change, individuals are encouraged
                      to be more conscious in decision-making and align with
                      broader goals of environmental conservation and societal
                      well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*End of new section*/}
            {/* New section */}
            <div className="m-6 rounded-lg bg-white py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  <p className="mx-auto pb-4 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Our Solution
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  {/* Image */}
                  <div className="w-1/4">
                    <img
                      className="w-160 h-48 rounded-md object-cover object-center shadow-lg"
                      src="https://static.vecteezy.com/system/resources/previews/010/889/793/original/business-idea-share-and-people-team-knowledge-innovation-collaboration-and-lightbulb-solution-illustration-concept-teamwork-strategy-with-brainstorm-bright-or-group-lamp-light-vision-together-vector.jpg"
                      alt="Pic2"
                    />
                  </div>
                  <div className="mx-3.5 mt-4 w-4/5">
                    <p className="text-xl text-gray-700">
                      The viability of affordable, accessible and sustainable
                      transport systems is incentivised on the platform as users
                      are allowed to earn rewards and track their progress
                      towards a greener lifestyle. These features allow for
                      users to understand their carbon footprint and encourages
                      a behaviour change towards green products, fostering a
                      sustainable-focused society
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*End of new section*/}
            {/* New section */}
            <div className="m-6 rounded-lg bg-white py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  <p className="mx-auto pb-4 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Key challenges
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  {/* Image */}
                  <div className="w-1/4">
                    <img
                      className="w-160 h-48 rounded-md object-cover object-center shadow-lg"
                      src="https://media.istockphoto.com/id/1283693397/vector/success-to-win-in-business-competition-overcome-obstacles-or-motivation-to-solve-problem-and.jpg?s=612x612&w=0&k=20&c=LimRWMzcJ1gxVAPQxD0sGsB6hs91zEIiu1Q3FMZrM5A="
                      alt="Pic 3"
                    />
                  </div>
                  <div className="mx-3.5 mt-4 w-4/5">
                    <div className="text-xl text-gray-700">
                      Listed are some of the key challenges we face and we
                      welcome anyone to contact us with their proposed solution.
                      Integration with Multiple Platforms Partnership and
                      Collaboration Behavioral Psychology Understanding
                      <ul>
                        <li>
                          - Integration with Multiple Platforms Partnership
                        </li>
                        <li>
                          - Collaboration Behavioral Psychology Understanding
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of new section*/}
            {/* New section */}
            <div className="m-6 rounded-lg bg-white py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  <p className="mx-auto pb-4 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Future Plans and Implementations
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  {/* Image */}
                  <div className="w-1/4">
                    <img
                      className="w-160 h-48 rounded-md object-cover object-center shadow-lg"
                      src="https://cdn.shopify.com/s/files/1/0070/7032/files/scaling-small-business.jpg?v=1647034312"
                      alt="Pic4"
                    />
                  </div>
                  <div className="mx-3.5 mt-4 w-4/5">
                    <div className="text-xl text-gray-700">
                      Proposed are some ways we can scale our initiative and
                      reach a wider audience while serving a greater good. Do
                      contact us if you can help us achieve our goal!
                      <ul>
                        <li>- API</li>
                        <li>
                          - Integration Machine Learning Algorithms
                          Multi-Platform
                        </li>
                        <li>- Support Personalization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of new section*/}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
