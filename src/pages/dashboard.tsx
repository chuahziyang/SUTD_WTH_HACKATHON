/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import Wrapper from "@components/components/wrapper";
import supabase from "../utils/supabaseClient";
import { useRouter } from "next/router";
import Activity from "@components/components/activity";

// const stats = [
//   { name: "Points Today", stat: "1,456" },
//   { name: "CO2 Saved Today", stat: "0.407t" },
//   { name: "Overall points", stat: "12,785" },
//   // previousStat: '70,946', change: '12%', changeType: 'increase'
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState([
    { name: "Points Today", stat: "0" },
    { name: "CO2 Saved Today", stat: "0.0t" },
    { name: "Overall points", stat: "0" },
  ]);

  useEffect(() => {
    const fetchUserStats = async () => {
      const userId = (await supabase.auth.getUser()).data.user?.id;
      const { data, error } = await supabase
        .from("userDetails")
        .select("*")
        .eq("userId", userId);
      if (error) {
        console.error("Error fetching user stats:", error);
        return;
      }
      const userStats = data[0];
      setStats([
        { name: "Points Today", stat: userStats.pointsToday },
        { name: "CO2 Saved Today", stat: `${userStats.co2SavedToday}t` },
        { name: "Overall points", stat: userStats.overallPoints },
      ]);
    };

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

    fetchUserStats();
    checkSession();
  }, [router]);

  useEffect(() => {
    const fetchStats = async () => {
      const user = supabase.auth.getUser();

      const { data: userDetails, error: userDetailsError } = await supabase
        .from("userDetails")
        .select("*")
        .eq("userId", (await user).data.user?.id);
      if (userDetailsError) {
        console.error("Error fetching user details:", userDetailsError);
        return;
      }

      const userStats = userDetails[0];
      setStats([
        { name: "Points Today", stat: userStats.pointsToday.toString() },
        {
          name: "CO2 Saved Today",
          stat: `${userStats.co2SavedToday.toFixed(1)}t`,
        },
        { name: "Overall points", stat: userStats.overallPoints.toString() },
      ]);
    };

    fetchStats();
  }, []);

  return (
    <>
      <Wrapper>
        <div className="py-12">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-400 pb-4 text-lg leading-tight text-gray-900">
                Welcome, Victor Zhao
              </h2>
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
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <Activity />
            </div>
          </main>
        </div>
      </Wrapper>
    </>
  );
}
