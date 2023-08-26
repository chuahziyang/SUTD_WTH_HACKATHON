/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import Wrapper from "@components/components/wrapper";

const activites = [
  {
    date: "27th Aug 2023",
    time: "04:00 PM",
    activity: "Walked a total distance of 5.5km",
    pts: "600",
  },
  {
    date: "26th Aug 2023",
    time: "08:59 AM",
    activity: "Carpooled a total distance of 3.4km",
    pts: "475",
  },
  // More people...
];

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <Wrapper>
        <div className="py-12">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h3 className="font-400 text-lg leading-tight text-gray-900">
                Victor Zhao
              </h3>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div>
                <h1 className="text-4xl font-bold leading-10 text-gray-900">
                  Dashboard
                </h1>
                <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                  {stats.map((item) => (
                    <div key={item.name} className="px-4 py-5 sm:p-6">
                      <dt className="text-center text-base font-medium text-gray-900">
                        {item.name}
                      </dt>
                      <dd className="mt-1 flex items-baseline justify-center md:block lg:flex">
                        <div className="py-8 text-7xl font-semibold text-[#009278]">
                          {item.stat}
                        </div>

                        {/* <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowSmDownIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                {item.change}
              </div> */}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-10 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                      Users
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                      A list of all activities within the past 30 days including
                      their date, time, and a point rewards summary.
                    </p>
                  </div>
                  <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#009278] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#009278] focus:outline-none focus:ring-2 focus:ring-[#009278] focus:ring-offset-2 sm:w-auto"
                    >
                      New Activity
                    </button>
                  </div>
                </div>
                <div className="mt-8 flex flex-col">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr className="divide-x divide-gray-200">
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                Date/Time
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Activity
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Points Awarded
                              </th>
                              {/* <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6">
                      Role
                    </th> */}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {activites.map((activity) => (
                              <tr
                                key={activity.date}
                                className="divide-x divide-gray-200"
                              >
                                <td className="whitespace-nowrap py-4 pl-4 text-sm font-medium text-gray-900 sm:pl-6">
                                  {activity.date}
                                  <span className="whitespace-nowrap pb-1 pl-2 align-middle text-xs text-gray-500">
                                    at {activity.time}
                                  </span>
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                  {activity.activity}
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                  {activity.pts}
                                </td>
                                {/* <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">{person.role}</td> */}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Wrapper>
    </>
  );
}
