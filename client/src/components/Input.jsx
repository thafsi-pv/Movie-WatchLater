import React from "react";

function Input({ id, name, type, autoComplete }) {
  return (
    <div className="mt-2">
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="block w-full rounded-md border-0 px-1 py-1.5 bg-white text-gray-700 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
      />
    </div>
  );
}

export default Input;
