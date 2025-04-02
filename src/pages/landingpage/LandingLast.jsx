import React from "react";
import img2 from "../../assets/img2.jpg";

function LandingLast() {
  return (
    <div className="flex flex-col justify-center items-center gap-[40px]">
      <img src={img2} className="w-[1275px] h-full mt-[30px] rounded-md" />
      <h1 className="text-[26px] font-semibold">
        Ready to transform your legal research?
      </h1>
      <button className="px-4 py-2 text-sidebar-bg bg-secondary-purple rounded-xl text-[16px] font-semibold cursor-pointer">
        Start Free Trial
      </button>
    </div>
  );
}

export default LandingLast;
