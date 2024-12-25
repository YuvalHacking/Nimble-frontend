import React from "react";
import { JSX } from "react";

const RADIAN = Math.PI / 180;

/**
 * Render a custom label for the pie chart slices.
 * 
 * @param {Object} params - The parameters for rendering.
 * @param {number} params.cx - X-coordinate of the pie center.
 * @param {number} params.cy - Y-coordinate of the pie center.
 * @param {number} params.midAngle - Angle of the slice midpoint.
 * @param {number} params.innerRadius - Inner radius of the pie slice.
 * @param {number} params.outerRadius - Outer radius of the pie slice.
 * @param {number} params.percent - Percentage value of the slice.
 * 
 * @returns {JSX.Element} A text element displaying the percentage value of the slice.
 */
export const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}): JSX.Element => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
