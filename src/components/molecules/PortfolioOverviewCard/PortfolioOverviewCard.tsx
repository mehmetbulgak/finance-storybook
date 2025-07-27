import React from "react";
import styles from "./PortfolioOverviewCard.module.scss";
import classNames from "classnames";
import { IconType } from "react-icons";

export type PortfolioItem = {
  label: string;
  value: number;
  icon?: React.ReactElement<IconType>;
};

export type PortfolioOverviewCardProps = {
  items: PortfolioItem[];
  currency?: string;
  className?: string;
  showPercentage?: boolean;
};

const PortfolioOverviewCard: React.FC<PortfolioOverviewCardProps> = ({
  items,
  currency = "₺",
  className,
  showPercentage = true,
}) => {
  const total = items.reduce((acc, item) => acc + item.value, 0);
  return (
    <div className={classNames(styles["portfolio-card"], className)}>
      <div className={styles["portfolio-card__header"]}>
        <h4 className={styles["portfolio-card__title"]}>Portfolio Overview</h4>
        <div className={styles["portfolio-card__total"]}>
          {currency} {total.toLocaleString()}
        </div>
      </div>
      <div className={styles["portfolio-card__items"]}>
        {items.map((item, idx) => {
          const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : "0";
          return (
            <div key={idx} className={styles["portfolio-card__item"]}>
              {item.icon && <div className={styles["portfolio-card__icon"]}>{item.icon}</div>}
              <div className={styles["portfolio-card__info"]}>
                <span className={styles["portfolio-card__label"]}>{item.label}</span>
                <span className={styles["portfolio-card__value"]}>
                  {currency} {item.value.toLocaleString()}
                  {showPercentage && ` (${percentage}%)`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioOverviewCard;
