/* This example requires Tailwind CSS v2.0+ */
import Wrapper from "@components/components/wrapper";
import React, { useState } from "react";
import Success from "@components/components/success";

export default function Example() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [pts, setpts] = useState(0);
  const [entered, setentered] = useState(false);

  const calc = () => {
    const ans = {
      walk: 4,
      cycle: 12,
      carpool: 80,
      publicTransport: 30,
    };
    console.log((inputValue / ans[selectedOption]) * 1000);
    setpts((inputValue / ans[selectedOption]) * 1000);
    setentered(true);
  };

  return (
    <>
      <Wrapper>
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="mb-6 text-lg font-medium leading-6 text-gray-900">
              Add Carbon Emmision Entry
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
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 [appearance:textfield] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 [appearance:textfield] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="0.00km"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span
                    className="text-gray-500 sm:text-sm"
                    id="price-currency"
                  >
                    Km
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="button"
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
