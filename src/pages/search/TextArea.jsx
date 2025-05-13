import React, { useEffect, useRef } from "react";
import { IoSendSharp } from "react-icons/io5";

function TextArea({ searchInput, setSearchInput, handleSearch }) {
  const editableDivRef = useRef(null);

  // Set initial content from searchInput
  useEffect(() => {
    if (editableDivRef.current && searchInput) {
      editableDivRef.current.innerText = searchInput;
    }
  }, [searchInput]);

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <h1 className="text-black font-semibold text-[16px]">Legal Search</h1>
      <div className="w-full flex items-center bg-input-bg p-2 rounded-xl">
        <div
          ref={editableDivRef}
          onInput={(e) => setSearchInput(e.currentTarget.textContent)}
          onKeyDown={(e) => {
            if (e.shiftKey && e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
          contentEditable={true}
          className="w-full outline-none py-2 px-4 text-base rounded-lg min-h-[20px] h-auto max-h-[200px] overflow-y-auto"
        ></div>
        <div>
          <button
            onClick={handleSearch}
            className="cursor-pointer align-center text-white p-2 rounded-full ml-2"
          >
            <IoSendSharp className="text-xl text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
