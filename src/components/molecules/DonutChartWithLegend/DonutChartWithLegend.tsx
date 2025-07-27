import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import classNames from "classnames";
import styles from "./DonutChartWithLegend.module.scss";

export type DonutChartData = {
  name: string;
  value: number;
  color: string;
};

type DonutChartWithLegendProps = {
  data: DonutChartData[];
  totalLabel?: string;
  currencySymbol?: string;
  disableAnimation?: boolean;
  className?: string;
};

const DonutChartWithLegend: React.FC<DonutChartWithLegendProps> = ({
  data,
  totalLabel = "Total",
  currencySymbol,
  disableAnimation,
  className,
}) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className={classNames(styles["donut"], className)}>
      <div className={styles["donut__chart"]}>
        <ResponsiveContainer width={160} height={160}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={50}
              outerRadius={80}
              stroke="none"
              isAnimationActive={!disableAnimation}
            >
              {data.map((entry, index) => (
                <Cell key={`slice-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className={styles["donut__center"]}>
          <span className={styles["donut__total"]}>
            {`${total.toLocaleString()}${currencySymbol ?? ""}`}
          </span>
          <span className={styles["donut__label"]}>{totalLabel}</span>
        </div>
      </div>
      <ul className={styles["donut__legend"]}>
        {data.map((entry) => (
          <li key={entry.name} className={styles["donut__legend-item"]}>
            <span
              className={styles["donut__legend-color"]}
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className={styles["donut__legend-label"]}>{entry.name}</span>
            <span className={styles["donut__legend-value"]}>
              {entry.value.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonutChartWithLegend;
