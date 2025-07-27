import React, { ReactElement, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Alert.module.scss";
import {
  MdCheckCircle,
  MdError,
  MdInfo,
  MdWarning,
  MdClose,
} from "react-icons/md";

type AlertVariant = "success" | "error" | "warning" | "info";

type AlertProps = {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  icon?: ReactElement;
  closable?: boolean;
  onClose?: () => void;
  className?: string;
};

const variantIcons: Record<AlertVariant, ReactElement> = {
  success: <MdCheckCircle />,
  error: <MdError />,
  warning: <MdWarning />,
  info: <MdInfo />,
};

const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  children,
  icon,
  closable = false,
  onClose,
  className,
}) => {
  const renderIcon = icon ?? variantIcons[variant];

  return (
    <div
      className={classNames(
        styles["alert"],
        styles[`alert--${variant}`],
        {
          [styles["alert--centered"]]: !title,
        },
        className
      )}
    >
      <div className={styles["alert__icon"]}>{renderIcon}</div>

      <div className={styles["alert__content"]}>
        {title && <div className={styles["alert__title"]}>{title}</div>}
        <div className={styles["alert__message"]}>{children}</div>
      </div>

      {closable && (
        <button
          className={styles["alert__close-button"]}
          onClick={onClose}
          type="button"
        >
          <MdClose />
        </button>
      )}
    </div>
  );
};

export default Alert;
