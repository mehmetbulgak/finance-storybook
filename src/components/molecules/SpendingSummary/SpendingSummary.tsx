import React from "react";
import classNames from "classnames";
import styles from "./SpendingSummary.module.scss";

export type SpendingCategory = {
  name: string;
  amount: number;
  color?: string;
};

export type SpendingSummaryProps = {
  label: string;
  currentAmount: number;
  comparisonAmount?: number;
  currency?: string;
  budgetLimit?: number;
  periodLabel?: string;
  className?: string;
  categories?: SpendingCategory[];
  dateRangePicker?: React.ReactNode;
  showTrend?: boolean;
  showProgress?: boolean;
};

const SpendingSummary: React.FC<SpendingSummaryProps> = ({
  label,
  currentAmount,
  comparisonAmount,
  currency = "₺",
  budgetLimit,
  periodLabel,
  className,
  categories = [],
  dateRangePicker,
  showTrend = true,
  showProgress = true,
}) => {
  const trend =
    comparisonAmount && comparisonAmount !== 0
      ? ((currentAmount - comparisonAmount) / comparisonAmount) * 100
      : null;

  const isIncrease = trend !== null && trend > 0;
  const trendVariant = isIncrease ? "danger" : "success";

  const percentage = budgetLimit
    ? Math.min((currentAmount / budgetLimit) * 100, 100)
    : null;

  return (
    <div className={classNames(styles["spending-summary"], className)}>
      <div className={styles["spending-summary__header"]}>
        <div className={styles["spending-summary__label"]}>
          {label}
          {periodLabel && (
            <span className={styles["spending-summary__period"]}>
              ({periodLabel})
            </span>
          )}
        </div>
        {dateRangePicker && (
          <div className={styles["spending-summary__datepicker"]}>
            {dateRangePicker}
          </div>
        )}
      </div>

      <div className={styles["spending-summary__amount"]}>
        {currency}
        {currentAmount.toLocaleString()}
      </div>

      {showTrend && trend !== null && (
        <>
          <div
            className={classNames(
              styles["spending-summary__trend"],
              styles[`spending-summary__trend--${trendVariant}`]
            )}
          >
            {isIncrease ? "▲" : "▼"} {Math.abs(trend).toFixed(1)}% compared to
            previous period
          </div>
          <div className={styles["spending-summary__comparison-amount"]}>
            (Previous period: {currency}
            {comparisonAmount?.toLocaleString()})
          </div>
        </>
      )}

      {showProgress && budgetLimit && (
        <div className={styles["spending-summary__progress"]}>
          <div className={styles["spending-summary__progress-bar"]}>
            <div
              className={styles["spending-summary__progress-fill"]}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className={styles["spending-summary__progress-values"]}>
            <span>
              {currency}
              {currentAmount.toLocaleString()}
            </span>
            <span>
              {currency}
              {budgetLimit.toLocaleString()}
            </span>
          </div>
        </div>
      )}

      {categories.length > 0 && (
        <ul className={styles["spending-summary__categories"]}>
          {categories.map((cat) => (
            <li key={cat.name} className={styles["spending-summary__category"]}>
              <span
                className={styles["spending-summary__category-color"]}
                style={{ backgroundColor: cat.color || "#ccc" }}
              />
              <span className={styles["spending-summary__category-name"]}>
                {cat.name}
              </span>
              <span className={styles["spending-summary__category-amount"]}>
                {currency}
                {cat.amount.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SpendingSummary;
