import React from "react";
import { FaList } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import HowItWorkdsCard from "./HowItWorkdsCard";

function HowItWorks() {
  const items = [
    {
      icon: <IoMdSearch className="text-[24px] text-secondary-purple" />,
      label: "Enter Search Query",
      content: "Type Keywords, citations, or legal concepts",
    },
    {
      icon: <FaList className="text-[24px] text-secondary-purple" />,
      label: "Review Results",
      content: "Browse relevant cases with accurate summaries",
    },
    {
      icon: (
        <IoDocumentTextOutline className="text-[24px] text-secondary-purple" />
      ),
      label: "Access Case Details",
      content: "View full text, itations, and related precedents",
    },
  ];
  return (
    <div className=" flex flex-col justify-center items-center gap-[20px]">
      <h1 className="text-[26px] font-semibold">How it Works?</h1>
      <div className="flex flex-col justify-center item-center gap-[20px]">
        {items?.map((item, index) => {
          return (
            <HowItWorkdsCard
              key={index}
              icon={item.icon}
              label={item.label}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HowItWorks;
