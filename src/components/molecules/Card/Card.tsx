import React from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

type Elevation = "none" | "sm" | "md";

type CardProps = {
  image?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  bordered?: boolean;
  elevation?: Elevation;
  padding?: "default" | "compact";
  centered?: boolean;
  isLoading?: boolean;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  children,
  footer,
  className,
  bordered = false,
  elevation = "sm",
  padding = "default",
  centered = false,
  isLoading = false,
}) => {
  return (
    <div
      className={classNames(
        styles.card,
        styles[`card--elevation-${elevation}`],
        styles[`card--padding-${padding}`],
        {
          [styles["card--bordered"]]: bordered,
          [styles["card--centered"]]: centered,
          [styles["card--loading"]]: isLoading,
        },
        className
      )}
    >
      {image && !isLoading && (
        <div className={styles["card__image-wrapper"]}>
          <img src={image} alt="" />
        </div>
      )}

      {isLoading ? (
        <div className={styles["card__skeleton-title"]} />
      ) : (
        title && <div className={styles["card__title"]}>{title}</div>
      )}

      <div className={styles["card__content"]}>
        {isLoading ? (
          <>
            <div className={styles["card__skeleton-line"]} />
            <div className={styles["card__skeleton-line"]} />
            <div
              className={classNames(
                styles["card__skeleton-line"],
                styles["card__skeleton-line--short"]
              )}
            />
          </>
        ) : (
          children
        )}
      </div>

      {footer && !isLoading && (
        <div className={styles["card__footer"]}>{footer}</div>
      )}
    </div>
  );
};

export default Card;
