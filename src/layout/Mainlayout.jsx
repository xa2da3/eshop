import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../components/Header";

function Mainlayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] h-[100vh] max-w-[1860px] mx-auto">
      <Sidebar />
      <div className="p-6 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Mainlayout;
