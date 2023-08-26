/* This example requires Tailwind CSS v2.0+ */
import Wrapper from "@components/components/wrapper";
import React, { useState } from "react";
import Success from "@components/components/success";
import supabase from "@components/utils/supabaseClient";

export default function Example() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [pts, setpts] = useState(0);
  const [entered, setentered] = useState(false);

  const calc = async () => {
    const ans = {
      walk: 4,
      cycle: 12,
      carpool: 80,
      publicTransport: 30,
    };
    const points = (inputValue / ans[selectedOption]) * 1000;
    console.log(points);
    setpts(points);
    setentered(true);

    const userId = (await supabase.auth.getUser()).data.user?.id;

    const { data, error } = await supabase.from("activityEntries").insert({
      userId: userId,
      type: selectedOption,
      description: "",
      pointsAward: points,
      dateTime: new Date(),
      distance: inputValue,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }

    //select current user and update points in userDetails
    const { data: user, error: userError } = await supabase
      .from("userDetails")
      .select("*")
      .eq("userId", userId);

    if (userError) {
      console.error(userError);
      return;
    }
    const today = new Date().toISOString().split("T")[0]; // get current date

    const { error: updateError } = await supabase
      .from("userDetails")
      .update({
        pointsToday: user[0].pointsToday + points,
        // co2SavedToday: user[0].co2SavedToday + points,
        overallPoints: user[0].overallPoints + points,
      })
      .eq("userId", userId);
  };

  return (
    <>
      <Wrapper>
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="mb-6 text-lg font-medium leading-6 text-gray-900">
              Add Carbon Emission Entry
            </h3>
            <div className="relative mt-2 rounded-md shadow-sm">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Mode of Transport
              </label>
              <select
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
                id="location"
                name="location"
                required
                className=" block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option disabled selected>
                  {" "}
                  -- select an option --{" "}
                </option>
                <option value="walk">Walk</option>
                <option value="cycle">Cycle</option>
                <option value="carpool">Carpool</option>
                <option value="publicTransport">Public Transport</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Distance Travelled
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  name="price"
                  id="price"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="0.00 "
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span
                    className="text-gray-500 sm:text-sm"
                    id="price-currency"
                  >
                    km
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-5 inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={calc}
                >
                  Add Entry
                </button>
              </div>
            </div>
          </div>
        </div>
        {entered && (
          <div>
            <Success which={true} points={parseInt(pts)}></Success>
          </div>
        )}
      </Wrapper>
    </>
  );
}
