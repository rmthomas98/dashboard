import React from "react";
import { CaretUpFill } from "react-bootstrap-icons";

const Balances = () => {
  return (
    <div className="w-full h-72 bg-radial rounded-lg p-4 mb-8 tablet:mr-6 tablet:mb-0">
      <div className="h-full flex flex-col justify-between">
        <p className="font-medium text-white pb-4">Account Balances</p>
        <div>
          <div className="flex justify-between items-center w-full">
            <p className="text-white font-thin text-sm pb-2">
              Marketing Budget
            </p>
            <p className="text-right text-xs font-thin mb-1 p-1 rounded-md text-violet-400 ">
              $25,000 / $50,000
            </p>
          </div>
          <div className="relative w-full pb-6">
            <div className="w-full h-2 bg-slate-900/75 rounded-full relative">
              <span className="animate-marketing-animation h-full bg-gradient-to-b from-violet-600 via-violet-400 to-violet-600 absolute top-0 left-0 rounded-full shadow-account-bar shadow-violet-500"></span>
              <CaretUpFill className="absolute top-2 left-1/2 translate-x-[-48%] text-violet-400 text-xs opacity-0 animate-appear" />
              <p className="absolute top-4 left-1/2 translate-x-[-30%] text-xs font-thin text-white mt-0.5 opacity-0 animate-appear">
                50%
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between w-full">
            <p className="text-white font-thin text-sm pb-2">Credit Line</p>
            <p className="text-right text-xs font-thin mb-1 p-1 rounded-md text-fuchsia-400 ">
              $30,000 / $40,000
            </p>
          </div>
          <div className="relative w-full pb-6">
            <div className="w-full h-2 bg-slate-900/75 rounded-full relative">
              <span className="animate-credit-animation h-full bg-gradient-to-b from-fuchsia-600 via-fuchsia-400 to-fuchsia-600 absolute top-0 left-0 rounded-full shadow-account-bar shadow-fuchsia-500"></span>
              <CaretUpFill className="absolute top-2 left-3/4 translate-x-[-60%] text-fuchsia-400 text-xs opacity-0 animate-appear" />
              <p className="absolute top-4 left-3/4 translate-x-[-50%] text-xs font-thin text-white mt-0.5 opacity-0 animate-appear">
                75%
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between w-full">
            <p className="text-white font-thin text-sm pb-2">Cash Available</p>
            <p className="text-right text-xs font-thin mb-1 p-1 rounded-md text-rose-400">
              $5,000 / $25,000
            </p>
          </div>
          <div className="relative w-full pb-6">
            <div className="w-full h-2 bg-slate-900/75 rounded-full relative">
              <span className="animate-cash-animation h-full bg-gradient-to-b from-rose-600 via-rose-400 to-rose-600 absolute top-0 left-0 rounded-full shadow-account-bar shadow-rose-500"></span>
              <CaretUpFill className="absolute top-2 left-1/4 translate-x-[-50%] text-rose-400 text-xs opacity-0 animate-appear" />
              <p className="absolute top-4 left-1/4 translate-x-[-40%] text-xs font-thin text-white mt-0.5 opacity-0 animate-appear">
                25%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balances;
