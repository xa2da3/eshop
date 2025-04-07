import React from "react";

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
                : "text-gray-500 font-normal"
            }`}
            // onClick={() => setSelectedTab(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

export default Tabs;
