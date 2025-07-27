import type { Meta, StoryObj } from "@storybook/react";
import DonutChartWithLegend, { DonutChartData } from "./DonutChartWithLegend";

const meta: Meta<typeof DonutChartWithLegend> = {
  title: "Molecules/DonutChartWithLegend",
  component: DonutChartWithLegend,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DonutChartWithLegend>;

const sampleData: DonutChartData[] = [
  { name: "Marketing", value: 3000, color: "#0070f3" },
  { name: "Salaries", value: 90000, color: "#1b9e5f" },
  { name: "Tools", value: 30000, color: "#d9822b" },
  { name: "Misc", value: 15000, color: "#e53935" },
];

export const Default: Story = {
  args: {
    data: sampleData,
    totalLabel: "Budget",
    currencySymbol: "$",
    disableAnimation: false,
  },
};
