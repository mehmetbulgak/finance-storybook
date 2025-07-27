import React from "react";
import { MdClose } from "react-icons/md";
import classNames from "classnames";
import styles from "./Tag.module.scss";

type TagProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
  size?: "sm" | "md";
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  rounded?: boolean;
  className?: string;
};

const Tag: React.FC<TagProps> = ({
  children,
  variant = "default",
  size = "md",
  icon,
  closable = false,
  onClose,
  rounded = false,
  className,
}) => {
  return (
    <span
      className={classNames(
        styles["tag"],
        styles[`tag--${variant}`],
        styles[`tag--${size}`],
        {
          [styles["tag--rounded"]]: rounded,
        },
        className
      )}
    >
      {icon && <span className={styles["tag__icon"]}>{icon}</span>}
      <span className={styles["tag__text"]}>{children}</span>
      {closable && (
        <button
          className={styles["tag__close-button"]}
          onClick={onClose}
          type="button"
        >
          <MdClose size={16} />
        </button>
      )}
    </span>
  );
};

export default Tag;
