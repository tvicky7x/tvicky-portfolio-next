import React from "react";

function Slider({ name, per }) {
  return (
    <div className="py-2 px-3">
      <p className=" text-start text-lg font-roboto_thin">{name}</p>
      <div className="w-full bg-gray-200 rounded-md h-3.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-3.5 rounded-s-md animate-proAnimation"
          style={{ width: `${per}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Slider;
