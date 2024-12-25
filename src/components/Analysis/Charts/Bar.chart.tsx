/**
 * CustomBarChart Component
 * 
 * A reusable bar chart component built with Recharts.
 * 
 * @param {ChartProps} props - The props for the component.
 * @param {Array<{ name: string; value: number }>} props.data - 
 * The data to be visualized. Each object should include a `name` field for the x-axis 
 * and a `value` field for the bar values.
 * 
 * @example
 * const data = [
 *   { name: "January", value: 400 },
 *   { name: "February", value: 300 },
 *   { name: "March", value: 200 },
 * ];
 * 
 * <CustomBarChart data={data} />
 * 
 * @returns {JSX.Element} A responsive bar chart component.
 */

import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  YAxis,
  Cell
} from "recharts";
import { ChartProps } from "@sharedTypes/charts";
import { COLORS } from "@common/constants";

const CustomBarChart: React.FC<ChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
    <BarChart 
      width={730} 
      height={750} 
      data={data} 
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <XAxis dataKey="name" stroke="gray"  type="category"/>
      <YAxis dataKey="value" stroke="number" />
      <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
      <Tooltip />
      <Bar 
        dataKey="value" 
        fill="#8884d8" 
        radius={[5, 5, 0, 0]} 
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default CustomBarChart;