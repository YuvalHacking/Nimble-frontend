/**
 * CustomPieChart Component
 * 
 * A reusable pie chart component built with Recharts.
 * 
 * @param {ChartProps} props - The props for the component.
 * @param {Array<{ name: string; value: number }>} props.data - 
 * The data to be visualized. Each object should include a `name` field for the legend 
 * and a `value` field for the pie slice.
 * 
 * @example
 * const data = [
 *   { name: "Group A", value: 400 },
 *   { name: "Group B", value: 300 },
 *   { name: "Group C", value: 300 },
 *   { name: "Group D", value: 200 },
 * ];
 * 
 * <CustomPieChart data={data} />
 * 
 * @returns {JSX.Element} A responsive pie chart component.
 */

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { ChartProps } from "@sharedTypes/charts";
import { renderCustomizedLabel } from "./utils/label.utils"; 
import { COLORS } from "@common/constants";

const CustomPieChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" aspect={3 / 4}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
