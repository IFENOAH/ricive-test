import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function LineChart({data, width, height }) {
  return (
    <ResponsiveContainer width= '100%' height = {height}>
        <AreaChart
          width={width}
          height={height}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#42BD7B" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#42BD7B" stopOpacity={0}/>
            </linearGradient>
          </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" style={{fontSize: 10}}  />
        <YAxis style={{fontSize: 10}}  />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#12B28C" fill="url(#color1)" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="url(#color1)" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="url(#color1)" />
        </AreaChart>
    </ResponsiveContainer>
  );
}
