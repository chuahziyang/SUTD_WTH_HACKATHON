import React from "react";

const Success = () => {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0"></div>
        <div className="ml-3">
          <p
            className="text-sm font-medium text-green-800"
            // v-bind:className="mapping[success].textcolour"
          >
            You have successfully logged this meal!, Total CO2 Used: 18g
            <br />
            Thats 18% less that the average meal! Good Job!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
