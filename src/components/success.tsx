import React from "react";

const ratio = 0.018;

const Success = (props) => {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0"></div>
        <div className="ml-3">
          <p
            className="text-sm font-medium text-green-800"
            // v-bind:className="mapping[success].textcolour"
          >
            You have successfully logged this {props.which ? "trip" : "meal"}!,
            Total CO2 Used: {props.points * ratio} kg
            <br />
            Thats {props.points} points for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
