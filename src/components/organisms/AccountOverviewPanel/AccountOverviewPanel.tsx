import React from "react";
import classNames from "classnames";
import styles from "./AccountOverviewPanel.module.scss";

import Card from "../../molecules/Card/Card";
import KPIIndicator from "../../molecules/KPIIndicator/KPIIndicator";
import TransactionItem from "../../molecules/TransactionItem/TransactionItem";
import Tag from "../../atoms/Tag/Tag";

import { FaArrowDown, FaArrowUp, FaCreditCard } from "react-icons/fa";

export type AccountOverviewPanelProps = {
  name: string;
  avatarUrl?: string;
  status?: "active" | "suspended";
  balance: number;
  currency?: string;
  balanceChange?: number;
  recentTransactions: {
    title: string;
    subtitle?: string;
    amount: number;
    type: "income" | "expense";
    date?: string;
    icon?: React.ReactNode;
  }[];
  linkedCards: {
    cardType: string;
    lastDigits: string;
    expiry: string;
  }[];
  className?: string;
};

const AccountOverviewPanel: React.FC<AccountOverviewPanelProps> = ({
  name,
  avatarUrl,
  status = "active",
  balance,
  currency = "₺",
  balanceChange = 0,
  recentTransactions,
  linkedCards,
  className,
}) => {
  return (
    <div className={classNames(styles["account-panel"], className)}>
      <Card
        title={
          <div className={styles["account-panel__header"]}>
            {avatarUrl && (
              <img
                src={avatarUrl}
                alt={name}
                className={styles["account-panel__avatar"]}
              />
            )}
            <div>
              <div className={styles["account-panel__name"]}>{name}</div>
              <Tag
                variant={status === "active" ? "success" : "warning"}
                size="sm"
                rounded
              >
                {status === "active" ? "Active" : "Suspended"}
              </Tag>
            </div>
          </div>
        }
        bordered
        elevation="md"
      >
        <KPIIndicator
          label="Current Balance"
          value={balance}
          percentageChange={balanceChange}
          unit={currency}
          comparisonText="since last month"
          icon={
            balanceChange >= 0 ? (
              <FaArrowUp size={18} />
            ) : (
              <FaArrowDown size={18} />
            )
          }
        />
      </Card>

      <div className={styles["account-panel__section"]}>
        <h4 className={styles["account-panel__section-title"]}>
          Recent Transactions
        </h4>
        {recentTransactions.map((tx, idx) => (
          <TransactionItem key={idx} {...tx} currency={currency} />
        ))}
      </div>

      <div className={styles["account-panel__section"]}>
        <h4 className={styles["account-panel__section-title"]}>Linked Cards</h4>
        <ul className={styles["account-panel__cards"]}>
          {linkedCards.map((card, idx) => (
            <li key={idx} className={styles["account-panel__card"]}>
              <FaCreditCard className={styles["account-panel__card-icon"]} />
              <div>
                <div>
                  {card.cardType} •••• {card.lastDigits}
                </div>
                <div className={styles["account-panel__card-expiry"]}>
                  Expires {card.expiry}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountOverviewPanel;
