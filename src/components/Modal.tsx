import React, { useState } from "react";

const Modal = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [pts, setpts] = useState(0);

  const calc = () => {
    const ans = {
      walk: 4,
      cycle: 12,
      carpool: 80,
      publicTransport: 30,
    };

    setpts(pts + (inputValue / ans[selectedOption]) * 1000);
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
    <div>
      <div>
        <label>Select an option:</label>
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        >
          <option value="">Type of activity</option>
          <option value="walk">Walk</option>
          <option value="cycle">Cycle</option>
          <option value="carpool">Carpool</option>
          <option value="publicTransport">Public Transport</option>
        </select>
      </div>
      <div>
        <label>Distance(km) travelled:</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={calc}>Calculate</button>
      </div>
    </div>
  );
};

export default Modal;
