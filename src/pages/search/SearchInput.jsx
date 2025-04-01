import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function SearchInput({ setSearchInput, handleSearch }) {
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <h1 className="text-black font-semibold text-[16px]">Legal Search</h1>
      <div className="w-full flex items-center bg-input-bg p-4 rounded-xl">
        <input
          className=" outline-none w-full"
          placeholder="Enter legal query or case citation"
          onChange={handleChange}
        />
        <FaArrowRightLong className="cursor-pointer" onClick={handleSearch} />
      </div>
    </div>
  );
}

export default SearchInput;
