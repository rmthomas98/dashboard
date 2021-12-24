import React from "react";
import {
  Box,
  GraphUpArrow,
  Grid,
  Collection,
  Tags,
  CurrencyDollar,
  PersonCheck,
  People,
  HouseDoorFill,
  Chat,
  Calendar,
  Telephone,
  LayersHalf,
} from "react-bootstrap-icons";

const Nav = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-opacity-25 min-w-fit h-screen overflow-y-auto pb-4 sticky top-0 scrollbar-hide shadow-nav-shadow xl:w-72 w-fit transition-all">
      <div className="flex items-center justify-center border-b border-neutral-100/20 m-4 mb-2 pb-6">
        <LayersHalf
          className="text-violet-400 relative top-1 xl:mr-2 mr-0"
          size={30}
        />
        <p className="text-3xl text-center font-thin text-white relative top-1 hidden xl:block">
          Admin<span className=" text-violet-400">View</span>
        </p>
      </div>

      <div className="pt-6">
        <p className="text-neutral-400/50 uppercase font-medium text-xs p-2 pl-4 pb-4">
          Main
        </p>
        <p className="text-white font-medium cursor-pointer p-3  flex">
          <HouseDoorFill className="relative text-violet-400 mx-auto left-0.5 xl:left-1 xl:top-1 xl:mr-3 xl:mx-0" />
          <span className="hidden xl:block">Dashboard</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <Box className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Orders</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <GraphUpArrow className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Analytics</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <Grid className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Categories</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <Collection className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Collections</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <Tags className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Products</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <CurrencyDollar className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Discounts</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <PersonCheck className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Employees</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <People className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Customers</span>
        </p>
        <p className="text-neutral-400/50 uppercase font-medium text-xs text-center pt-6 pb-4 xl:p-2 xl:text-left xl:pl-4 xl:mx-0">
          Teams
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <Chat className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Messages</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <Calendar className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Schedule</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex hover:text-white transition-all">
          <Telephone className="relative mx-auto xl:mx-0 xl:top-1 xl:mr-2" />
          <span className="hidden xl:block">Support</span>
        </p>
      </div>
    </div>
  );
};

export default Nav;
