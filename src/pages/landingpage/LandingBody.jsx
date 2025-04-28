import React from "react";
import img1 from "../../assets/img1.jpeg";
import img3 from "../../assets/img3.png";
import { useNavigate } from "react-router-dom";
function LandingBody() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="flex flex-col gap-[10px] justify-center items-center">
        {/* <h1 className="text-[44px] font-semibold">
          Find Legal Precedants of Arbitration Instantly
        </h1>
        <h2 className="text-[24px] font-normal">
          Trained on 40,000 cases from 10 different countries
        </h2> */}
        <div className="flex flex-col gap-[10px]">
          <div className="grid grid-cols-2 gap-[40px]">
            <div className="text-[44px] font-semibold flex flex-col justify-center w-full">
              Smart Arbitration Starts Here 123
              <h2 className="text-[20px] text-gray-400 font-medium">
                Intelligence at Every Step - From Research to Award
              </h2>
            </div>
            <div className="h-[550px]">
              <img src={img3} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[20px] mt-[30px]">
          <button
            onClick={() => navigate("/search")}
            className="px-12 py-4 text-sidebar-bg hover:text-secondary-purple hover:bg-sidebar-bg border-[1px] border-secondary-purple bg-secondary-purple rounded-xl text-[16px] font-semibold cursor-pointer"
          >
            Search Now
          </button>
          {/* <button className="px-4 py-2 bg-sidebar-bg text-secondary-purple rounded-xl text-[16px] font-semibold cursor-pointer">
            Advanced Search
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default LandingBody;
