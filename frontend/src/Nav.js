import React from 'react';
import graph from "./assets/images/graph.svg";
import {
  HouseDoor,
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
  Telephone
} from "react-bootstrap-icons";

const Nav = () => {

  return (
    <div className="bg-slate-800 border-opacity-25 w-72 min-w-fit min-h-screen shadow-nav-shadow">
      <div className="flex align-middle justify-center border-b border-neutral-100/20 m-4 mb-2 pb-6">
        <img src={graph} className="h-12 mr-1" />
        <p className="text-3xl text-center font-thin text-white relative top-1">
          Instant<span className=" text-cyan-400">Dash</span>
        </p>
      </div>
      
      <div className="pt-6">
        <p className="text-neutral-400/50 uppercase font-medium text-xs p-2 pl-4 pb-4">
          Main
        </p>
        <p className="text-white font-medium cursor-pointer p-3 pl-4f flex align-middle">
          <HouseDoorFill className="relative left-1 top-1 mr-3 text-cyan-400" />
          <span>Dashboard</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <Box className="relative top-1 mr-2 flex align-middle justify-center" />
          <span>Orders</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <GraphUpArrow className="mr-2 relative top-1" />
          <span>Analytics</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <Grid className="mr-2 relative top-1" />
          <span>Categories</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <Collection className="relative top-1 mr-2" />
          <span>Collections</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <Tags className="relative top-1 mr-2"/>
          <span>Products</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <CurrencyDollar className="relative top-1 mr-2"/>
          <span>Discounts</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <PersonCheck className="relative top-1 mr-2" />
          <span>Employees</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <People className="relative top-1 mr-2" />
          <span>Customers</span>
        </p>
        <p className="text-neutral-400/50 uppercase font-medium text-xs p-2 pl-4 pb-4 pt-6">
          Teams
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <Chat className="relative top-1 mr-2" />
          <span>Messages</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <Calendar className="relative top-1 mr-2" />
          <span>Schedule</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle hover:text-white transition-all">
          <Telephone className="relative top-1 mr-2" />
          <span>Support</span>
        </p>
      </div>
    </div>
  );
};

export default Nav;
