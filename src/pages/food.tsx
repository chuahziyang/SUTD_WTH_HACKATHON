/* This example requires Tailwind CSS v2.0+ */
import Wrapper from "@components/components/wrapper";
import Success from "@components/components/success";
import { useState } from "react";

export default function Example() {
  const [pts, setPts] = useState(0);
  const [entered, setentered] = useState(false);

  // State for additional fields
  const [additionalFields, setAdditionalFields] = useState([
    { selectedOption: null, inputValue: null },
  ]);

  const calc = () => {
    const ans = {
      meat: 25,
      dairy: 9,
      veg: 3,
      fruits: 1,
    };

    // Calculate points for the main dropdown and input
    let totalPts = 0;

    // Calculate points for additional dropdowns and inputs
    additionalFields.forEach((field) => {
      totalPts += (field.inputValue / ans[field.selectedOption]) * 250;
    });

    setPts(totalPts);
    setentered(true);
  };

  const addField = () => {
    // Add a new field with default values
    setAdditionalFields([
      ...additionalFields,
      { selectedOption: null, inputValue: null },
    ]);
  };

  return (
    <>
      <Wrapper>
        <div className="bg-white shadow sm:rounded-lg">
          <div className=" px-4 sm:p-6">
            <h1 className="mb-4 text-4xl font-bold leading-10 text-gray-900">
              Calculate your Food
            </h1>
            <div className="relative inline-block">
              <img
                src="https://res.cloudinary.com/dcwbll1kw/image/upload/v1693074879/record-page-banner-top_bh3ozo.jpg"
                alt="Photo by Karoline Stk on Unsplash"
                className="h-auto w-full rounded-md opacity-90 shadow-lg"
              ></img>
              <div className="absolute bottom-0 z-10 mx-[130px] pb-2">
                <p className="text-base font-bold leading-6 text-white">
                  Input the type of food you have eaten and the total mass. With
                  our calculator, we can then calculate your emissions and you
                  will be able to see how you have contributed to climate
                  protection:
                </p>
              </div>
            </div>

            {/* <div className="relative mt-2 rounded-md shadow-sm">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Type of Food
              </label>
            </div>
            <select
              value={selectedOption}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 [appearance:textfield] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            >
              <option disabled selected>
                {" "}
                -- select an option --{" "}
              </option>
              <option value="meat">Meat</option>
              <option value="dairy">Dairy Products</option>
              <option value="veg">Vegetables</option>
              <option value="fruits">Fruits</option>
            </select>

            <div className="relative mt-3 rounded-md shadow-sm">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Amount of Food
              </label>
            </div>
            <input
              type="number"
              name="grams"
              value={inputValue}
              placeholder="0g"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 [appearance:textfield] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            ></input> */}
            {additionalFields.map((field, index) => (
              <div key={index}>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <label
                    htmlFor="location"
                    className="mb-3 block text-sm font-medium text-gray-900"
                  >
                    Type of Food
                  </label>
                </div>
                <select
                  value={field.selectedOption}
                  className="appearance:none mb-3 block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009278] sm:text-sm sm:leading-6 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  onChange={(e) => {
                    const updatedFields = [...additionalFields];
                    updatedFields[index].selectedOption = e.target.value;
                    setAdditionalFields(updatedFields);
                  }}
                >
                  <option disabled selected>
                    {" "}
                    -- select an option --{" "}
                  </option>
                  <option value="meat">Meat</option>
                  <option value="dairy">Dairy Products</option>
                  <option value="veg">Vegetables</option>
                  <option value="fruits">Fruits</option>
                </select>

                <div className="relative mt-3 rounded-md shadow-sm">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Amount of Food
                  </label>
                </div>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="number"
                    value={field.inputValue}
                    className="appearance:none mb-3 block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009278] sm:text-sm sm:leading-6 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    onChange={(e) => {
                      const updatedFields = [...additionalFields];
                      updatedFields[index].inputValue = e.target.value;
                      setAdditionalFields(updatedFields);
                    }}
                    placeholder="0.00kg"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span
                      className="text-gray-500 sm:text-sm"
                      id="price-currency"
                    >
                      kg
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-row justify-between">
              <button
                type="button"
                className="mt-5 inline-flex items-center rounded-md border border-transparent bg-[#cdf4ec] px-4 py-2 text-sm font-medium text-[#009278] hover:bg-[#bbf2e7] focus:outline-none focus:ring-2 focus:ring-[#009278] focus:ring-offset-2"
                onClick={calc}
              >
                Calculate
              </button>
              <button
                type="button"
                className="mt-5 inline-flex items-center rounded-md border border-transparent bg-[#cdf4ec] px-4 py-2 text-sm font-medium text-[#009278] hover:bg-[#bbf2e7] focus:outline-none focus:ring-2 focus:ring-[#009278] focus:ring-offset-2"
                onClick={addField}
              >
                Add Entry
              </button>
            </div>
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm" id="price-currency">
                g
              </span>
            </div> */}
          </div>
          {/* <div>
            <label>Amount consumed(g):</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm" id="price-currency">
                g
              </span>
            </div>
          </div> */}
        </div>
        {entered && (
          <div>
            <Success points={parseInt(pts)}></Success>
          </div>
        )}
      </Wrapper>
    </>
  );
}
