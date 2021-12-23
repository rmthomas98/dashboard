import React from "react";
import {
  PieChart as PieCharter,
  ResponsiveContainer,
  Tooltip,
  Pie,
  LabelList,
} from "recharts";

const PieChart = () => {
  const data = [
    { name: "Google", value: 1250, fill: "#6366f1" },
    { name: "Ads", value: 1000, fill: "#8b5cf6" },
    { name: "Socials", value: 700, fill: "#d946ef" },
    { name: "Youtube", value: 400, fill: "#f43f5e" },
  ];

  return (
    <div className="w-2/5 bg-slate-300 rounded-lg p-4 bg-gradient-to-r from-slate-600 to-slate-800 ">
      <p className="text-white font-medium">Traffic Soure Analytics</p>
      <div className="flex pt-2">
        <p className="flex items-center mr-4">
          <span className="h-2 w-2 rounded-full bg-indigo-500 block mr-1"></span>
          <span className="text-sm text-white font-thin">Google</span>
        </p>
        <p className="flex items-center mr-4">
          <span className="h-2 w-2 rounded-full bg-violet-500 block mr-1 shadow-md "></span>
          <span className="text-sm text-white font-thin">Ads</span>
        </p>
        <p className="flex items-center mr-4">
          <span className="h-2 w-2 rounded-full bg-fuchsia-500 block mr-1 shadow-md "></span>
          <span className="text-sm text-white font-thin">Socials</span>
        </p>
        <p className="flex items-center mr-4">
          <span className="h-2 w-2 rounded-full bg-rose-500 block mr-1 shadow-md "></span>
          <span className="text-sm text-white font-thin">Youtube</span>
        </p>
      </div>
      <div className="h-64 w-11/12 mx-auto mt-6 drop-shadow-2xl">
        <ResponsiveContainer>
          <PieCharter>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              stroke="#475569"
              cx="50%"
              cy="50%"
              outerRadius={90}
              innerRadius={70}
              label
              fontSize={14}
              fontWeight={500}
            />
            <Tooltip content={<CustomTooltip />} />
          </PieCharter>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    if (payload[0]?.payload.name === "Google") {
      return (
        <div className="bg-gradient-to-r from-indigo-400 to-indigo-800 p-2 pl-4 pr-4 rounded-lg shadow-lg shadow-slate-900/75">
          <p className="text-white font-medium">{payload[0].payload.name}</p>
          <p className="text-white font-medium text-sm">
            {payload[0].payload.value.toLocaleString("en-us")} Clicks
          </p>
          <p className="text-white font-medium text-sm">
            {`${((payload[0].payload.value / 3350) * 100).toFixed(2)}%`} of
            Traffic
          </p>
        </div>
      );
    } else if (payload[0].payload.name === "Ads") {
      return (
        <div className="bg-gradient-to-r from-violet-400 to-violet-800 p-2 pl-4 pr-4 rounded-lg shadow-lg shadow-slate-900/75">
          <p className="text-white font-medium">{payload[0].payload.name}</p>
          <p className="text-white font-medium text-sm">
            {payload[0].payload.value.toLocaleString("en-us")} Clicks
          </p>
          <p className="text-white font-medium text-sm">
            {`${((payload[0].payload.value / 3350) * 100).toFixed(2)}%`} of
            Traffic
          </p>
        </div>
      );
    } else if (payload[0].payload.name === "Socials") {
      return (
        <div className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-800 p-2 pl-4 pr-4 rounded-lg shadow-lg shadow-slate-900/75">
          <p className="text-white font-medium">{payload[0].payload.name}</p>
          <p className="text-white font-medium text-sm">
            {payload[0].payload.value} Clicks
          </p>
          <p className="text-white font-medium text-sm">
            {`${((payload[0].payload.value / 3350) * 100).toFixed(2)}%`} of
            Traffic
          </p>
        </div>
      );
    } else if (payload[0].payload.name === "Youtube") {
      return (
        <div className="bg-gradient-to-r from-rose-400 to-rose-800 p-2 pl-4 pr-4 rounded-lg shadow-lg shadow-slate-900/75">
          <p className="text-white font-medium">{payload[0].payload.name}</p>
          <p className="text-white font-medium text-sm">
            {payload[0].payload.value} Clicks
          </p>
          <p className="text-white font-medium text-sm">
            {`${((payload[0].payload.value / 3350) * 100).toFixed(2)}%`} of
            Traffic
          </p>
        </div>
      );
    } else {
      return "";
    }
  } else {
    return "";
  }
};

export default PieChart;
