import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import classNames from "classnames";
import styles from "./NetWorthTrend.module.scss";

export type NetWorthDataPoint = {
  date: string;
  value: number;
};

export type NetWorthTrendProps = {
  data: NetWorthDataPoint[];
  currency?: string;
  className?: string;
};

const NetWorthTrend: React.FC<NetWorthTrendProps> = ({
  data,
  currency = "₺",
  className,
}) => {
  const latest = data[data.length - 1]?.value || 0;
  const first = data[0]?.value || 0;
  const change = latest - first;
  const changePercent = first ? (change / first) * 100 : 0;

  const trendLabel =
    change >= 0
      ? `↑ ${change.toLocaleString()} ${currency} (+${changePercent.toFixed(
          1
        )}%)`
      : `↓ ${Math.abs(
          change
        ).toLocaleString()} ${currency} (${changePercent.toFixed(1)}%)`;

  return (
    <div className={classNames(styles["trend"], className)}>
      <div className={styles["trend__header"]}>
        <h4 className={styles["trend__title"]}>Net Worth Trend</h4>
        <span
          className={classNames(styles["trend__change"], {
            [styles["trend__change--positive"]]: change > 0,
            [styles["trend__change--negative"]]: change < 0,
          })}
        >
          {trendLabel}
        </span>
      </div>
      <div className={styles["trend__chart"]}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip
              formatter={(val) => `${currency} ${Number(val).toLocaleString()}`}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={change >= 0 ? "#1b9e5f" : "#e53935"}
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NetWorthTrend;
