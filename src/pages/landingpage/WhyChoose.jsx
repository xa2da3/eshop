import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineTouchApp } from "react-icons/md";
import WhyChooseCard from "./WhyChooseCard";

function WhyChoose() {
  const items = [
    {
      icon: <BiBadgeCheck className="text-[24px] text-secondary-purple" />,
      label: "Accurate Results",
      content:
        "Trained on 40,000 real cases to ensure factual, reliable search results without hallucinations",
    },
    {
      icon: (
        <BsFillLightningChargeFill className="text-[24px] text-secondary-purple" />
      ),
      label: "Fast Research",
      content:
        "Find relevent precedents in seconds with our optimized search algorithm",
    },
    {
      icon: <MdOutlineTouchApp className="text-[24px] text-secondary-purple" />,
      label: "Simple interface",
      content:
        "Intuitive designs makes complex legal research accessible to all professionals",
    },
  ];
  return (
    <div className=" flex flex-col justify-center items-center gap-[20px]">
      <h1 className="text-[26px] font-semibold">
        Why Choose Our Case Search ?
      </h1>
      <div className="flex items-start gap-[20px]">
        {items?.map((item, index) => {
          return (
            <WhyChooseCard
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

export default WhyChoose;
