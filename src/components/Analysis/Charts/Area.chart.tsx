/**
 * CustomAreaChart Component
 * 
 * A reusable and responsive area chart component built with Recharts.
 * 
 * @param {ChartProps} props - The props for the component.
 * @param {Array<{ name: string; value: number }>} props.data - 
 * The data to be visualized. Each object should include a `name` field for the x-axis 
 * and a `value` field for the area values.
 * 
 * @example
 * const data = [
 *   { name: "January", value: 400 },
 *   { name: "February", value: 300 },
 *   { name: "March", value: 200 },
 * ];
 * 
 * <CustomAreaChart data={data} />
 * 
 * @returns {JSX.Element} A responsive area chart component.
 */

import React from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  YAxis
} from "recharts";
import  { ChartProps } from "@sharedTypes/charts";

const CustomAreaChart: React.FC<ChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" aspect={2 / 1}>
    <AreaChart 
      width={730} 
      height={250} 
      data={data} 
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="value" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" stroke="gray" />
      <YAxis dataKey="value" stroke="number" />
      
      <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
      <Tooltip />
      <Area 
        type="monotone" 
        dataKey="value" 
        stroke="#8884d8" 
        fillOpacity={1} 
        fill="url(#value)" 
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default CustomAreaChart;
