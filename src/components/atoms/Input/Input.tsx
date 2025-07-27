import React from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

type InputProps = {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: "default" | "underline";
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  id,
  className,
  variant = "default",
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={classNames(styles["input"])}>
      {label && (
        <label htmlFor={inputId} className={styles["input__label"]}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={classNames(
          styles["input__field"],
          styles[`input__field--${variant}`],
          {
            [styles["input__field--error"]]: !!error,
          },
          className
        )}
        {...props}
      />
      {error ? (
        <span className={styles["input__error-text"]}>{error}</span>
      ) : helperText ? (
        <span className={styles["input__helper-text"]}>{helperText}</span>
      ) : null}
    </div>
  );
};

export default Input;
