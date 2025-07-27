import styles from "./ColorPalette.module.scss";

type Color = {
  name: string;
  variable: string;
  hex: string;
};

const colors: Color[] = [
  // 🎨 Base Colors
  { name: "Primary", variable: "$color-primary", hex: "#1b1c1e" },
  { name: "Secondary", variable: "$color-secondary", hex: "#1e2a38" },
  { name: "Body", variable: "$color-body", hex: "#6b7280" },
  { name: "Background", variable: "$color-background", hex: "#ffffff" },
  { name: "Muted", variable: "$color-muted", hex: "#f5f7fa" },
  { name: "Border", variable: "$color-border", hex: "#e3e3e3" },

  // 🌈 Action and Status
  { name: "Accent", variable: "$color-accent", hex: "#0070f3" },
  { name: "Info", variable: "$color-info", hex: "#2f80ed" },
  { name: "Info BG", variable: "$color-info-bg", hex: "#e8f0fe" },
  { name: "Info Border", variable: "$color-info-border", hex: "#bcd3ff" },

  { name: "Success", variable: "$color-success", hex: "#1b9e5f" },
  { name: "Success BG", variable: "$color-success-bg", hex: "#e6f4ea" },

  { name: "Warning", variable: "$color-warning", hex: "#d9822b" },
  { name: "Warning BG", variable: "$color-warning-bg", hex: "#fff4e5" },

  { name: "Error", variable: "$color-error", hex: "#e53935" },
  { name: "Error BG", variable: "$color-error-bg", hex: "#fbeaea" },
];

const ColorPalette = () => {
  return (
    <div className={styles["palette"]}>
      {colors.map((color) => (
        <div key={color.hex} className={styles["palette__swatch"]}>
          <div
            className={styles["palette__box"]}
            style={{ backgroundColor: color.hex }}
          />
          <div className={styles["palette__label"]}>
            <strong>{color.name}</strong>
            <code>{color.variable}</code>
            <span>{color.hex}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
