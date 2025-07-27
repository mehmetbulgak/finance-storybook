import React from "react";
import classNames from "classnames";
import styles from "./FinancialOverviewPanel.module.scss";
import KPIIndicator, { KPIIndicatorProps } from "../../molecules/KPIIndicator/KPIIndicator";
import PortfolioOverviewCard, { PortfolioOverviewCardProps } from "../../molecules/PortfolioOverviewCard/PortfolioOverviewCard";
import TransactionItem, { TransactionItemProps } from "../../molecules/TransactionItem/TransactionItem";
import UpcomingBillsListItem, { UpcomingBillsListItemProps } from "../../molecules/UpcomingBillsListItem/UpcomingBillsListItem";

export type FinancialOverviewPanelProps = {
  kpis: KPIIndicatorProps[];
  portfolio: PortfolioOverviewCardProps;
  transactions: TransactionItemProps[];
  bills: UpcomingBillsListItemProps[];
  className?: string;
};

const FinancialOverviewPanel: React.FC<FinancialOverviewPanelProps> = ({ kpis, portfolio, transactions, bills, className }) => {
  return (
    <div className={classNames(styles["financial-overview"], className)}>
      <div className={styles["financial-overview__kpis"]}>
        {kpis.map((kpi, idx) => (
          <KPIIndicator key={idx} {...kpi} />
        ))}
      </div>
      <PortfolioOverviewCard {...portfolio} />
      <div className={styles["financial-overview__section"]}>
        <h4>Recent Transactions</h4>
        {transactions.map((tx, idx) => (
          <TransactionItem key={idx} {...tx} />
        ))}
      </div>
      <div className={styles["financial-overview__section"]}>
        <h4>Upcoming Bills</h4>
        {bills.map((bill, idx) => (
          <UpcomingBillsListItem key={idx} {...bill} />
        ))}
      </div>
    </div>
  );
};

export default FinancialOverviewPanel;
