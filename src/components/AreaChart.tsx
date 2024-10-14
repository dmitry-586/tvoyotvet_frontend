"use client";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  {
    name: "1",
    money: 5800,
  },
  {
    name: "2",
    money: 7000,
  },
  {
    name: "3",
    money: 4800,
  },
  {
    name: "4",
    money: 3908,
  },
  {
    name: "5",
    money: 4800,
  },
  {
    name: "6",
    money: 6800,
  },
];

const AreaChartComponent = () => {
  const ChangeMoney = () => {
    if (salesData.length === 0) return 0; // or some default value
    const initialValue = salesData[0].money;
    const currentValue = salesData[salesData.length - 1].money;
    const change = ((currentValue - initialValue) / initialValue) * 100;
    return change.toFixed(2);
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={359} height={272} data={salesData}>
        <XAxis
          dataKey="name"
          scale="point"
          axisLine={false}
          tickLine={false}
          tick={{
            fill: "rgba(0, 0, 0, 0)",
          }}
        />
        {/* <YAxis yAxisId="primary" /> */}
        <Tooltip content={<CustomTooltip />} />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="-20%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#838383" />
            <stop offset="80%" stopColor="rgba(255, 255, 255, 0.0001)" />
          </linearGradient>
        </defs>
        <Area
          dataKey="money"
          fill="none"
          type={"monotone"}
          stroke="#9D9D9D"
          strokeWidth={2}
        />
        <Area
          dataKey="money"
          fill="url(#gradient)"
          type={"monotone"}
          stroke="#9D9D9D"
          strokeWidth={0}
          transform={`translate(0, 5)`}
        />
        <g transform="translate(130, 130)">
          <text dy={15} fill="black" fontWeight="bold" className="text-[48px]">
            {ChangeMoney()}
          </text>
          <image
            x={125}
            y={-25}
            href="/arrow-up-right.svg"
            width={48}
            height={48}
          />
        </g>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-[#9D9D9D] flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-white">{label}</p>
        <p className="text-sm text-white">
          money:
          <span className="ml-2">${payload[0].value}</span>
        </p>
      </div>
    );
  }
};
