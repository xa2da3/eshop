import React, { useState } from "react";
import Tabs from "./Tabs";
import Results from "./Results";

function SearchResults() {
  const [selectedTab, setSelectedTab] = useState("Case Law");
  const tabList = [
    "Case Law",
    "Statutes",
    "Legal Analysis",
    "Court Documents",
    "Legal Commentary",
  ];
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-black font-semibold text-[20px]">Search Results</h1>
      <Tabs
        tabList={tabList}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />

      <Results />
    </div>
  );
}

export default SearchResults;
