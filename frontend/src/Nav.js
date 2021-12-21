import React, { useEffect, useState } from "react";
import graph from "./assets/images/graph.svg";
import { format } from "date-fns";
import {
  HouseDoor,
  Box,
  GraphUpArrow,
  Grid,
  Collection,
} from "react-bootstrap-icons";

const Nav = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-slate-900 border-opacity-25 w-72 min-w-fit">
      <div className="flex align-middle justify-center p-4 pr-6 pl-6 pb-1">
        <img src={graph} className="h-12 mr-1" />
        <p className="text-3xl text-center font-semibold text-white italic relative top-1">
          Instant<span className="italic text-cyan-400">Dash</span>
        </p>
      </div>
      <p className="text-white font-thin p-2 pt-0 pb-4 text-center">
        {format(time, "MMMM, dd h:mm:ss aa")}
      </p>
      <div className="pt-10">
        <p className="text-neutral-400/50 uppercase font-medium text-xs p-2 pl-4 pb-5">
          Main
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4f flex align-middle">
          <HouseDoor className="relative top-1 mr-2" />
          <span>Dashboard</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle">
          <Box className="relative top-1 mr-2 flex align-middle justify-center" />
          <span>Orders</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle">
          <GraphUpArrow className="mr-2 relative top-1" />
          <span>Analytics</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle">
          <Grid className="mr-2 relative top-1" />
          <span>Categories</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4 flex align-middle">
          <Collection className="relative top-1 mr-2" />
          <span>Collections</span>
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4">
          Products
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4">
          Dicsounts
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4">
          Employees
        </p>
        <p className="text-neutral-400 font-medium cursor-pointer p-3 pl-4">
          Customers
        </p>
      </div>
    </div>
  );
};

export default Nav;
