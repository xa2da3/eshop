import React from "react";
import LandingHeader from "./LandingHeader";
import LandingBody from "./LandingBody";
import WhyChoose from "./WhyChoose";
import HowItWorks from "./HowItWorks";
import LandingLast from "./LandingLast";

function LandingPage() {
  return (
    <div>
      <LandingHeader />
      <div className="px-[40px] pt-[40px] pb-[60px] flex flex-col gap-[80px]">
        <LandingBody />
        <WhyChoose />
        <HowItWorks />
        <LandingLast />
      </div>
    </div>
  );
}

export default LandingPage;
