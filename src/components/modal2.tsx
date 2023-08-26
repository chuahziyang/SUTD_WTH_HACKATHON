import React, { useState } from "react";

const Modal = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [pts, setPts] = useState(0);

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
  };

  const addField = () => {
    // Add a new field with default values
    setAdditionalFields([
      ...additionalFields,
      { selectedOption: "", inputValue: "" },
    ]);
  };

  return (
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
        <label>Number of servings</label>
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
            {/* Options here */}
          </select>
          <label>Distance(km) travelled:</label>
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
        <p>Points: {pts}</p>
      </div>
    </div>
  );
};

export default Modal;
