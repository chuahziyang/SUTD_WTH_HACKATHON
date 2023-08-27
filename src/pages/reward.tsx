/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import Wrapper from "@components/components/wrapper";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import supabase from "@components/utils/supabaseClient";

const people = [
  {
    name: "Grab Unlimited",
    title: "1 Month of Grab Unlimited",
    role: "2,000 points",
    price: 2000,
    image:
      "https://res.cloudinary.com/dcwbll1kw/image/upload/v1693077630/grab-unlimited-logo_h4e72f.jpg",
  },
  {
    name: "Swensens",
    title: "10$ off your next order",
    role: "3,000 points",
    price: 3000,

    image:
      "https://res.cloudinary.com/dcwbll1kw/image/upload/v1693078069/swensens-logo_kysjjn.png",
  },
  {
    name: "An Acai Affair",
    title: "Free Acai Bowl",
    role: "5,000 points",
    price: 5000,
    image:
      "https://res.cloudinary.com/dcwbll1kw/image/upload/v1693078363/an-acai-affair-logo_ydphmk.jpg",
  },
  {
    name: "iPhone 15",
    title: "Latest unreleased iPhone 15",
    role: "250,000 points",
    price: 250000,
    image:
      "https://res.cloudinary.com/dcwbll1kw/image/upload/v1693080387/iphone-15_s8eyrl.png",
  },
  {
    name: "Marina Bay Sands",
    title: "1 night stay at Marina Bay Sands for 2",
    role: "50,000 points",
    price: 50000,
    image: "https://res.cloudinary.com/dcwbll1kw/image/upload/v1693080092/marina-bay-sands_gqt5pf.jpg",
  },
  {
    name: "Taylor Swift Tickets",
    title: "Cat 2B Tickets",
    role: "100,000 points",
    price: 100000,
    image:
      "https://res.cloudinary.com/dcwbll1kw/image/upload/v1693079821/taylor-swift_xqblcm.png",
  },
  // More people...
];

export default function Example() {
  const [overallPoints, setOverallPoints] = useState(0);

  const fetchOverallPoints = async () => {
    const userId = (await supabase.auth.getUser()).data.user?.id;
    const { data, error } = await supabase
      .from("userDetails")
      .select("*")
      .eq("userId", userId);
    if (error) {
      console.error("Error fetching user stats:", error);
      return;
    }
    setOverallPoints(data[0].overallPoints);
  };

  useEffect(() => {
    fetchOverallPoints();
  }, []);

  const handlePurchase = async (price) => {
    const userId = (await supabase.auth.getUser()).data.user?.id;
    const { data, error } = await supabase
      .from("userDetails")
      .select("*")
      .eq("userId", userId);
    if (error) {
      console.error("Error fetching user stats:", error);
      return;
    }
    if (data[0].overallPoints < price) {
      alert("You do not have enough points to purchase this reward!");
      return;
    }
    const { error: updateError } = await supabase
      .from("userDetails")
      .update({
        overallPoints: data[0].overallPoints - price,
      })
      .eq("userId", userId);
    if (updateError) {
      console.error(updateError);
      return;
    }
    alert("You have successfully purchased this reward!");
    fetchOverallPoints();
  };

  return (
    <>
      <Wrapper>
        <div>
          <dl className="my-5 ">
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <h1 className="mb-8 text-4xl font-bold leading-10 text-gray-900">
                Rewards
              </h1>
              <dt className="truncate text-sm font-medium text-gray-500">
                Number of points
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {overallPoints}
              </dd>
            </div>
          </dl>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {people.map((person) => (
            <li
              key={person.email}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <img
                    src={person.image}
                    alt="Logo"
                    className="mb-4 h-auto w-full rounded-lg"
                  />
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {person.name}
                    </h3>
                    <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                      {person.role}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    {person.title}
                  </p>
                </div>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="-ml-px flex w-0 flex-1">
                    <button
                      type="button"
                      onClick={() => handlePurchase(person.price)}
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <span className="ml-3">Purchase</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </>
  );
}
