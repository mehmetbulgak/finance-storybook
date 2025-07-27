import React from "react";
import classNames from "classnames";
import styles from "./CreditCardSummary.module.scss";

export type CreditCardSummaryProps = {
  cardholderName: string;
  cardType: "Visa" | "MasterCard" | "Amex" | "Troy";
  last4Digits: string;
  expiry: string;
  balance: number;
  availableLimit: number;
  currency?: string;
  status?: "active" | "blocked" | "expired";
  variant?: "dark" | "light" | "accent";
  className?: string;
  onClick?: () => void;
};

const CreditCardSummary: React.FC<CreditCardSummaryProps> = ({
  cardholderName,
  cardType,
  last4Digits,
  expiry,
  balance,
  availableLimit,
  currency = "₺",
  status = "active",
  variant = "dark",
  className,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        styles["credit-card"],
        styles[`credit-card--${variant}`],
        {
          [styles["credit-card--clickable"]]: !!onClick,
        },
        className
      )}
      onClick={onClick}
    >
      <div className={styles["credit-card__top"]}>
        <span
          className={classNames(
            styles["credit-card__type"],
            styles[`credit-card__type--${variant}`]
          )}
        >
          {cardType}
        </span>
        <span
          className={classNames(
            styles["credit-card__status"],
            styles[`credit-card__status--${status}`]
          )}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className={styles["credit-card__number"]}>•••• {last4Digits}</div>

      <div className={styles["credit-card__row"]}>
        <span className={styles["credit-card__label"]}>Cardholder</span>
        <span className={styles["credit-card__value"]}>{cardholderName}</span>
      </div>

      <div className={styles["credit-card__row"]}>
        <span className={styles["credit-card__label"]}>Expires</span>
        <span className={styles["credit-card__value"]}>{expiry}</span>
      </div>

      <div className={styles["credit-card__balance"]}>
        <div>
          <span className={styles["credit-card__label"]}>Balance</span>
          <span className={styles["credit-card__amount"]}>
            {currency}
            {balance.toLocaleString()}
          </span>
        </div>
        <div>
          <span className={styles["credit-card__label"]}>Available</span>
          <span className={styles["credit-card__available"]}>
            {currency}
            {availableLimit.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardSummary;
