import React from "react";
import classNames from "classnames";
import styles from "./KPIIndicator.module.scss";

export type KPIIndicatorProps = {
  label: string;
  value: number;
  unit?: string;
  percentageChange?: number;
  comparisonText?: string;
  icon?: React.ReactNode;
  className?: string;
};

const KPIIndicator: React.FC<KPIIndicatorProps> = ({
  label,
  value,
  unit,
  percentageChange,
  comparisonText,
  icon,
  className,
}) => {
  const isPositive = percentageChange !== undefined && percentageChange >= 0;
  const trendVariant = isPositive ? "up" : "down";

  return (
    <div className={classNames(styles["kpi"], className)}>
      {icon && <div className={styles["kpi__icon"]}>{icon}</div>}

      <div className={styles["kpi__content"]}>
        <div className={styles["kpi__label"]}>{label}</div>

        <div className={styles["kpi__value"]}>
          {unit && <span className={styles["kpi__unit"]}>{unit}</span>}
          {value.toLocaleString()}
        </div>

        {percentageChange !== undefined && (
          <div
            className={classNames(
              styles["kpi__trend"],
              styles[`kpi__trend--${trendVariant}`]
            )}
          >
            {isPositive ? "▲" : "▼"} {Math.abs(percentageChange).toFixed(1)}%
            {comparisonText && ` ${comparisonText}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default KPIIndicator;
