import React from "react";
import classNames from "classnames";
import styles from "./UpcomingBillsListItem.module.scss";
import {
  FaCalendarAlt,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";
import Button from "../../atoms/Button/Button";

export type UpcomingBillsListItemProps = {
  title: string;
  description?: string;
  dueDate: string;
  amount: number;
  currency?: string;
  status?: "upcoming" | "overdue" | "paid";
  icon?: React.ReactNode;
  onPayClick?: () => void;
  className?: string;
};

const statusLabels = {
  paid: "Paid",
  upcoming: "Upcoming",
  overdue: "Overdue",
};

const statusIcons = {
  paid: <FaCheckCircle />,
  upcoming: <FaCalendarAlt />,
  overdue: <FaExclamationCircle />,
};

const UpcomingBillsListItem: React.FC<UpcomingBillsListItemProps> = ({
  title,
  description,
  dueDate,
  amount,
  currency = "₺",
  status = "upcoming",
  onPayClick,
  className,
}) => {
  return (
    <div className={classNames(styles["bill-item"], className)}>
      <div className={styles["bill-item__header"]}>
        <div className={styles["bill-item__status"]}>
          <span
            className={classNames(
              styles["bill-item__status-icon"],
              styles[`bill-item__status--${status}`]
            )}
          >
            {statusIcons[status]}
          </span>
          <span className={styles["bill-item__status-text"]}>
            {statusLabels[status]}
          </span>
        </div>
        <span className={styles["bill-item__due-date"]}>{dueDate}</span>
      </div>
      <div className={styles["bill-item__body"]}>
        <div className={styles["bill-item__info"]}>
          <h4 className={styles["bill-item__title"]}>{title}</h4>
          {description && (
            <p className={styles["bill-item__description"]}>{description}</p>
          )}
        </div>
        <div className={styles["bill-item__amount"]}>
          {currency} {amount.toLocaleString()}
        </div>
      </div>
      {onPayClick && (
        <div className={styles["bill-item__footer"]}>
          <Button variant="primary" onClick={onPayClick}>
            Pay Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default UpcomingBillsListItem;
