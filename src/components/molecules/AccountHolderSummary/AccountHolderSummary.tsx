import React from "react";
import classNames from "classnames";
import styles from "./AccountHolderSummary.module.scss";
import Tag from "../../atoms/Tag/Tag";

export type AccountHolderSummaryProps = {
  name: string;
  accountNumber?: string;
  iban?: string;
  balance?: number;
  currency?: string;
  avatarUrl?: string;
  status?: "active" | "suspended" | "pending" | "closed";
  email?: string;
  phone?: string;
  note?: string;
  showCopyButtons?: boolean;
  showDetailsLink?: boolean;
  onDetailsClick?: () => void;
  actions?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const AccountHolderSummary: React.FC<AccountHolderSummaryProps> = ({
  name,
  accountNumber,
  iban,
  balance,
  currency = "₺",
  avatarUrl,
  status = "active",
  email,
  phone,
  note,
  showCopyButtons = false,
  showDetailsLink = false,
  onDetailsClick,
  actions,
  onClick,
  className,
}) => {
  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0);
    return parts[0].charAt(0) + parts[1].charAt(0);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className={classNames(styles["account-holder"], className, {
        [styles["account-holder--clickable"]]: !!onClick,
      })}
      onClick={onClick}
    >
      <div className={styles["account-holder__avatar"]}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} />
        ) : (
          <div className={styles["account-holder__initials"]}>
            {getInitials(name).toUpperCase()}
          </div>
        )}
      </div>

      <div className={styles["account-holder__info"]}>
        <div className={styles["account-holder__header"]}>
          <div className={styles["account-holder__name"]}>{name}</div>
          <Tag
            variant={
              status === "active"
                ? "success"
                : status === "suspended"
                ? "warning"
                : status === "pending"
                ? "default"
                : "danger"
            }
            size="sm"
            rounded
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Tag>
        </div>

        {accountNumber && (
          <div className={styles["account-holder__field"]}>
            <span>Account No: {accountNumber}</span>
            {showCopyButtons && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(accountNumber);
                }}
              >
                Copy
              </button>
            )}
          </div>
        )}

        {iban && (
          <div className={styles["account-holder__field"]}>
            <span>IBAN: {iban}</span>
            {showCopyButtons && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(iban);
                }}
              >
                Copy
              </button>
            )}
          </div>
        )}

        {email && (
          <div className={styles["account-holder__field"]}>Email: {email}</div>
        )}
        {phone && (
          <div className={styles["account-holder__field"]}>Phone: {phone}</div>
        )}
        {balance !== undefined && (
          <div className={styles["account-holder__balance"]}>
            Balance: {currency}
            {balance.toLocaleString()}
          </div>
        )}
        {note && <div className={styles["account-holder__note"]}>{note}</div>}

        {showDetailsLink && onDetailsClick && (
          <button
            className={styles["account-holder__details-link"]}
            onClick={(e) => {
              e.stopPropagation();
              onDetailsClick();
            }}
          >
            View Details
          </button>
        )}
      </div>

      {actions && (
        <div className={styles["account-holder__actions"]}>{actions}</div>
      )}
    </div>
  );
};

export default AccountHolderSummary;
