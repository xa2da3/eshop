import React from "react";
import img1 from "../../assets/img1.jpeg";
import { useNavigate } from "react-router-dom";
function LandingBody() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="flex flex-col gap-[10px] justify-center items-center">
        <h1 className="text-[44px] font-semibold">
          Find Legal Precedants of Arbitration Instantly
        </h1>
        <h2 className="text-[24px] font-normal">
          Trained on 40,000 cases from 10 different countries
        </h2>
        <img src={img1} className="w-[1275px] h-full mt-[30px] rounded-md" />
        <div className="flex items-center gap-[20px] mt-[30px]">
          <button
            onClick={() => navigate("/search")}
            className="px-4 py-2 text-sidebar-bg bg-secondary-purple rounded-xl text-[16px] font-semibold cursor-pointer"
          >
            Search Now
          </button>
          <button className="px-4 py-2 bg-sidebar-bg text-secondary-purple rounded-xl text-[16px] font-semibold cursor-pointer">
            Advanced Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingBody;
