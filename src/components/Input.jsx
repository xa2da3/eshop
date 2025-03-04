import React, { useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import courtroom from "../assets/courtroom.jpg";
import axios from "axios";

function Input({ setLoading, setDocuments }) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/query", {
        query: text,
      });
      setDocuments(response?.data?.results);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 bg-gray-200 flex p-4 flex flex-col justify-between items-center h-[100vh]">
      <div className="h-[200px] w-[300px]">
        <img src={courtroom} className="object-contain" />
      </div>
      <div className="w-full flex items-end gap-[5px] ">
        <div
          onInput={(e) => setText(e.currentTarget.textContent)}
          onKeyDown={(e) => {
            if (e.shiftKey && e.key === "Enter") {
              e.preventDefault(); // Prevents adding a new line
              handleSubmit();
            }
          }}
          contentEditable={true}
          className="bg-white outline-none py-2 px-4 text-base rounded-lg min-h-[20px] h-auto max-h-[200px] w-[80%] overflow-y-auto"
        ></div>
        <div>
          <button
            onClick={handleSubmit}
            className="bg-black cursor-pointer align-center text-white p-2 rounded-full ml-2"
          >
            <IoSendSharp className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
