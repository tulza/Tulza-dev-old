import React from "react";

const InputRange = ({ value, set }) => {
  return (
    <>
      <div className="flex gap-4 ">
        <p className="text-xl font-bold text-right w-4">{value}</p>
        <input
          className="ml-5 z-10"
          type="range"
          min={-180}
          max={180}
          value={value}
          onChange={(e) => {
            set(parseFloat(e.target.value) || 0);
          }}
        />
      </div>
    </>
  );
};

export default InputRange;
