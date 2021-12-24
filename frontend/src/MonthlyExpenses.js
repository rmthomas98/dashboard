import React, { useEffect, useState } from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const data = [
  { value: 38 },
  { value: 17 },
  { value: 29 },
  { value: 22 },
  { value: 42 },
  { value: 15 },
  { value: 47 },
  { value: 30 },
  { value: 14 },
];

const MonthlyExpenses = () => {
  return (
    <div className="h-72 w-full p-4 bg-gradient-to-r from-slate-600 to-slate-800 rounded-lg">
      <p className="font-medium text-white">Monthly Expenses</p>
      <div className="h-fill-container flex justify-between items-center flex-col">
        <div className="flex justify-between w-full pt-1 items-center">
          <p className="text-white font-thin text-sm pt-2 pb-1">
            Dec, 1 - Dec, 31
          </p>
          <p className="text-white text-sm font-thin bg-slate-900/25 rounded-md w-fit pl-2 pr-2 pt-1 pb-1">
            +10.7%
          </p>
          <p className="text-2xl text-rose-400">-$2,350.00</p>
        </div>
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              strokeWidth={1.5}
              stroke="#a78bfa"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyExpenses;
