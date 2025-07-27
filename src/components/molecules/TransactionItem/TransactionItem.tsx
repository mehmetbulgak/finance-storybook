import React from "react";
import classNames from "classnames";
import styles from "./TransactionItem.module.scss";

export type TransactionItemProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  amount: number;
  currency?: string;
  type?: "income" | "expense";
  date?: string;
  className?: string;
};

const TransactionItem: React.FC<TransactionItemProps> = ({
  icon,
  title,
  subtitle,
  amount,
  currency = "₺",
  type = "expense",
  date,
  className,
}) => {
  const isIncome = type === "income";

  return (
    <div className={classNames(styles["transaction"], className)}>
      {icon && <div className={styles["transaction__icon"]}>{icon}</div>}

      <div className={styles["transaction__content"]}>
        <div className={styles["transaction__header"]}>
          <span className={styles["transaction__title"]}>{title}</span>
          <span
            className={classNames(
              styles["transaction__amount"],
              isIncome
                ? styles["transaction__amount--income"]
                : styles["transaction__amount--expense"]
            )}
          >
            {isIncome ? "+" : "-"}
            {currency}
            {amount.toLocaleString()}
          </span>
        </div>

        {(subtitle || date) && (
          <div className={styles["transaction__meta"]}>
            {subtitle && <span>{subtitle}</span>}
            {subtitle && date && <span> • </span>}
            {date && <span>{date}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionItem;
