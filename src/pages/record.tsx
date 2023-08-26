/* This example requires Tailwind CSS v2.0+ */
import Wrapper from "@components/components/wrapper";
import React, { useState } from "react";
import Success from "@components/components/success";

export default function Example() {
  const [selectedOption, setSelectedOption] = useState("");
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

    setpts((inputValue / ans[selectedOption]) * 1000);
    setentered(true);
  };
  // const arr = [8, 12, 80, 30];
  // // Check the selected option and execute the corresponding script
  // if (isNaN(inputValue) || inputValue === "") {
  //   alert("Please enter a valid value");
  // } else if (selectedOption === "walk") {
  //   pts += (inputValue / arr[0]) * 1000;
  // } else if (selectedOption === "cycle") {
  //   pts += (inputValue / arr[1]) * 1000;
  // } else if (selectedOption === "carpool") {
  //   pts += (inputValue / arr[2]) * 1000;
  // } else if (selectedOption === "publicTransport") {
  //   pts += (inputValue / arr[3]) * 1000;
  // }

  return (
    <>
      <Wrapper>
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="mb-6 text-lg font-medium leading-6 text-gray-900">
              Add Carbon Emmision Entry
            </h3>
            <div>
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
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
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
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="0.00"
                />
              </div>
              <div>
                <button onClick={calc}>Add Entry</button>
                {pts}
                {entered}
              </div>
            </div>
          </div>
        </div>
        {entered && (
          <div>
            <Success></Success>
          </div>
        )}
      </Wrapper>
    </>
  );
}
