import React, { useState } from "react";
import { sidebarItems, sidebarTools } from "./sidebarItems";

function Sidebar() {
  const [selectedTab, setSelectedTab] = useState("Search");
  return (
    <div className="bg-sidebar-bg p-6 flex flex-col gap-[20px]">
      <div>
        <h1 className="text-[24px] font-bold">Lex Arbitra</h1>
      </div>
      <ol className="flex flex-col gap-[10px]">
        {sidebarItems?.map((item, index) => {
          return (
            <li
              key={index}
              className={`cursor-pointer p-2 font-medium text-[16px] flex items-center gap-[15px] ${
                item.label == selectedTab ? "bg-primary-purple rounded-md" : ""
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          );
        })}
      </ol>
      <div>
        <h1 className="text-[16px] font-semibold text-gray-700">Tools</h1>
      </div>
      <ol className="flex flex-col gap-[10px]">
        {sidebarTools?.map((item, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer p-2 font-medium text-[16px] flex items-center gap-[15px]"
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Sidebar;
