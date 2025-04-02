import React from "react";

function WhyChooseCard({ icon, label, content }) {
  return (
    <div className="px-4 py-8 bg-sidebar-bg rounded-2xl flex flex-col gap-[10px] max-w-[400px]">
      <div className="p-4 rounded-full bg-tert-purple max-w-fit">{icon}</div>
      <div className="text-[24px] font-medium">{label}</div>
      <div className="text-[16px] font-normal">{content}</div>
    </div>
  );
}

export default WhyChooseCard;
