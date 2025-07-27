import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "ghost"
    | "outline"
    | "link"
    | "tertiary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft,
  iconRight,
  loading = false,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles["button"],
        styles[`button--${variant}`],
        styles[`button--${size}`],
        {
          [styles["button--disabled"]]: disabled || loading,
        },
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className={styles["button__loader"]} />
      ) : (
        <>
          {iconLeft && (
            <span className={styles["button__icon"]}>{iconLeft}</span>
          )}
          {children}
          {iconRight && (
            <span className={styles["button__icon"]}>{iconRight}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
