import React from "react";
import ReactSelect, { Props as SelectProps, GroupBase } from "react-select";
import classNames from "classnames";
import styles from "./SelectDropdown.module.scss";

type OptionType = {
  label: string;
  value: string | number;
};

type SelectDropdownProps = {
  label?: string;
  error?: string;
  helperText?: string;
  className?: string;
} & SelectProps<OptionType, false, GroupBase<OptionType>>;

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  label,
  error,
  helperText,
  className,
  ...props
}) => {
  return (
    <div className={classNames(styles["select"], className)}>
      {label && <label className={styles["select__label"]}>{label}</label>}
      <ReactSelect
        classNamePrefix="custom-select"
        className={classNames(styles["select__control"], {
          [styles["select--error"]]: !!error,
        })}
        {...props}
      />
      {error ? (
        <span className={styles["select__error-text"]}>{error}</span>
      ) : helperText ? (
        <span className={styles["select__helper-text"]}>{helperText}</span>
      ) : null}
    </div>
  );
};

export default SelectDropdown;
