/* This example requires Tailwind CSS v2.0+ */
import Wrapper from "@components/components/wrapper";
import Success from "@components/components/success";
import { useState } from "react";

export default function Example() {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [pts, setPts] = useState(0);
  const [entered, setentered] = useState(false);

  // State for additional fields
  const [additionalFields, setAdditionalFields] = useState([
    { selectedOption: "", inputValue: "" },
  ]);

  const calc = () => {
    const ans = {
      meat: 25,
      dairy: 9,
      veg: 3,
      fruits: 1,
    };

    // Calculate points for the main dropdown and input
    let totalPts = (inputValue / ans[selectedOption]) * 250;

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
      { selectedOption: "", inputValue: "" },
    ]);
  };

  return (
    <>
      <Wrapper>
        <div>
          <div>
            <label>Select an option:</label>
            <select
              value={selectedOption}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
            >
              <option value="">Type of food</option>
              <option value="meat">Meat</option>
              <option value="dairy">Dairy Products</option>
              <option value="veg">Vegetables</option>
              <option value="fruits">Fruits</option>
            </select>
          </div>
          <div>
            <label>Amount consumed(g):</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </div>

          {additionalFields.map((field, index) => (
            <div key={index}>
              <label>Select an option:</label>
              <select
                value={field.selectedOption}
                onChange={(e) => {
                  const updatedFields = [...additionalFields];
                  updatedFields[index].selectedOption = e.target.value;
                  setAdditionalFields(updatedFields);
                }}
              >
                <option value="">Type of food</option>
                <option value="meat">Meat</option>
                <option value="dairy">Dairy Products</option>
                <option value="veg">Vegetables</option>
                <option value="fruits">Fruits</option>
              </select>
              <label>Amount consumed(g):</label>
              <input
                type="number"
                value={field.inputValue}
                onChange={(e) => {
                  const updatedFields = [...additionalFields];
                  updatedFields[index].inputValue = e.target.value;
                  setAdditionalFields(updatedFields);
                }}
              />
            </div>
          ))}

          <div>
            <button onClick={addField}>Add Field</button>
          </div>
          <div>
            <button onClick={calc}>Calculate</button>
          </div>
          <div>
            <p>Points: {parseInt(pts)}</p>
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
