/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import Wrapper from "@components/components/wrapper";
import supabase from "../utils/supabaseClient";
import { useRouter } from "next/router";

const stats = [
  {
    name: "Total Subscribers",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Avg. Open Rate",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "Avg. Click Rate",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
];

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        console.log(data);
        if (error) {
          throw error;
        }

        if (data.session === null) {
          console.log("No session");
          router.replace("/login");
        }
        console.log("Session found");
      } catch (error) {
        console.error("Error fetching session:", error);
        router.replace("/login");
      }
    };

    checkSession();
  }, [router]);

  return (
    <>
      <Wrapper>
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Last 30 days
                </h3>
                <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                  {stats.map((item) => (
                    <div key={item.name} className="px-4 py-5 sm:p-6">
                      <dt className="text-base font-normal text-gray-900">
                        {item.name}
                      </dt>
                      <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                        <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                          {item.stat}
                          <span className="ml-2 text-sm font-medium text-gray-500">
                            from {item.previousStat}
                          </span>
                        </div>

                        <div
                          className={classNames(
                            item.changeType === "increase"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800",
                            "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
                          )}
                        >
                          {item.changeType === "increase" ? (
                            <ArrowSmUpIcon
                              className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowSmDownIcon
                              className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {item.changeType === "increase"
                              ? "Increased"
                              : "Decreased"}{" "}
                            by
                          </span>
                          {item.change}
                        </div>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                      Users
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                      A list of all the users in your account including their
                      name, title, email and role.
                    </p>
                  </div>
                  <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <a
                      href="/record"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Add user
                    </a>
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
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Title
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Email
                              </th>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                              >
                                Role
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {people.map((person) => (
                              <tr
                                key={person.email}
                                className="divide-x divide-gray-200"
                              >
                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                                  {person.name}
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                  {person.title}
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                  {person.email}
                                </td>
                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                                  {person.role}
                                </td>
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
