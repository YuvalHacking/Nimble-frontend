import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import "./Widget.scss";

interface WidgetProps {
  type: "earnings" | "invoices" | "overdue";
}

const Widget: React.FC<WidgetProps> = ({ type }) => {
  const widgetData = useSelector((state: RootState) => state.widgets);

  const data = (() => {
    switch (type) {
      case "earnings":
        return {
          title: "EARNINGS",
          isMoney: true,
          ...widgetData.earnings,
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{
                color: "green",
                backgroundColor: "rgba(0, 128, 0, 0.2)",
              }}
            />
          ),
        };
      case "invoices":
        return {
          title: "INVOICES",
          isMoney: false,
          ...widgetData.invoices,
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "rgba(218, 165, 32, 0.2)",
              }}
            />
          ),
        };
      case "overdue":
        return {
          title: "OVERDUE",
          isMoney: false,
          ...widgetData.overdue,
          icon: (
            <RunningWithErrorsIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
      default:
        return {
          title: "UNKNOWN",
          isMoney: false,
          difference: 0,
          amount: 0,
          icon: <></>,
        };
    }
  })();

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.amount} {data.isMoney && "$"}
        </span>
      </div>
      <div className="right">
        <div className="item">
          <div
            className={`percentage ${
              data.difference >= 0 ? "positive" : "negative"
            }`}
          >
            {data.difference >= 0 ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            {Math.abs(data.difference)}%
          </div>
          <div className="itemTitle">Last Week</div>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
