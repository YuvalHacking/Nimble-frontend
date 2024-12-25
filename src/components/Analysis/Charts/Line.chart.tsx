/**
 * CustomLineChart Component
 * 
 * A reusable line chart component built with Recharts.
 * 
 * @param {ChartProps} props - The props for the component.
 * @param {Array<{ name: string; value: number }>} props.data - 
 * The data to be visualized. Each object should include a `name` field for the x-axis 
 * and a `value` field for the line values.
 * 
 * @example
 * const data = [
 *   { name: "January", value: 400 },
 *   { name: "February", value: 300 },
 *   { name: "March", value: 200 },
 * ];
 * 
 * <CustomLineChart data={data} />
 * 
 * @returns {JSX.Element} A responsive line chart component.
 */

import React from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  YAxis
} from "recharts";
import { ChartProps } from "@sharedTypes/charts";

const CustomLineChart: React.FC<ChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" aspect={2 / 1}>
    <LineChart 
      width={730} 
      height={250} 
      data={data} 
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <XAxis dataKey="name" stroke="gray" />
      <YAxis dataKey="value" stroke="number" />
      
      <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
      <Tooltip />
      <Line 
        type="monotone" 
        dataKey="value" 
        stroke="#8884d8" 
        activeDot={{ r: 8 }} 
      />
    </LineChart>
  </ResponsiveContainer>
);

export default CustomLineChart;
