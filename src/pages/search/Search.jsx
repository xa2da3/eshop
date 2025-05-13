import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import Tabs from "./Tabs";
import Results from "./Results";
import axios from "axios";
import config from "../../config/mainConfig";
import TextArea from "./TextArea";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTab, setSelectedTab] = useState("Case Law");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const tabList = ["Case Law", "Statutes", "Legal Analysis", "Court Documents", "Legal Commentary"];

  // 👇 Fetch from sessionStorage on first render
  useEffect(() => {
    const query = sessionStorage.getItem("query");
    if (query) {
      setSearchInput(query);
      // sessionStorage.removeItem("query");
    }
  }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      console.log("This This This");
      const res = await axios.post(`${config.apiURL}/query`, {
        query: searchInput,
      });
      setSearchResults(res?.data?.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <TextArea searchInput={searchInput} setSearchInput={setSearchInput}  handleSearch={handleSearch} />
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-black font-semibold text-[20px]">Search Results</h1>
        <Tabs tabList={tabList} setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <Results searchResults={searchResults} loading={loading} />
      </div>
    </div>
  );
}

export default Search;
