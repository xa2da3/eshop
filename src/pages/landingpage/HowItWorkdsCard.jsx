import React from "react";

function HowItWorkdsCard({ icon, label, content }) {
  return (
    <div className="flex items-center gap-[20px]">
      <div className="p-4 rounded-xl bg-sidebar-bg max-w-fit">{icon}</div>
      <div className="flex flex-col gap-[20xp]">
        <span className="text-[20px] font-medium">{label}</span>
        <span className="text-[16px font-normal]">{content}</span>
      </div>
    </div>
  );
}

export default HowItWorkdsCard;
