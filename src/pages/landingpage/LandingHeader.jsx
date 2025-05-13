import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
function LandingHeader() {
  return (
    <div className="flex items-center justify-between p-[20px] 0 shadow">
      <div className="flex items-center gap-[20px]">
        <Link className="text-[20px] font-semibold">Lex Arbitra</Link>
        <Link className="text-[16px] font-normal my-anchor-element">
          Features
        </Link>
        <Link className="text-[16px] font-normal my-anchor-element">
          Pricing
        </Link>
        <Link className="text-[16px] font-normal my-anchor-element">About</Link>
        <Tooltip anchorSelect=".my-anchor-element" place="top">
          We are working on it, Stay Tuned !
        </Tooltip>
      </div>
      <div className="flex items-center gap-[20px]">
        {/* <button className="px-4 py-2 bg-sidebar-bg text-secondary-purple rounded-xl text-[16px] font-semibold cursor-pointer">
          Login
        </button>
        <button className="px-4 py-2 text-sidebar-bg bg-secondary-purple rounded-xl text-[16px] font-semibold cursor-pointer">
          Start free
        </button> */}
      </div>
    </div>
  );
}

export default LandingHeader;
