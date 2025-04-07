import React from "react";
import { Tooltip } from "react-tooltip";

function Tabs({ tabList, setSelectedTab, selectedTab }) {
  return (
    <div className="flex items-center gap-[20px]">
      {tabList?.map((item, index) => {
        return (
          <span
            key={index}
            className={`py-2 text- cursor-pointer ${
              selectedTab == item
                ? "border-b-2 text-black font-medium"
                : "text-gray-500 font-normal my-anchor-element"
            }`}
            // onClick={() => setSelectedTab(item)}
          >
            {item}
          </span>
        );
      })}
      <Tooltip anchorSelect=".my-anchor-element" place="top">
          We are working on it, Stay Tunned !
        </Tooltip>
    </div>
  );
}

export default Tabs;
