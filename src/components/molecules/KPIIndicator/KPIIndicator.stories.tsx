import type { Meta, StoryObj } from "@storybook/react";
import KPIIndicator from "./KPIIndicator";
import { TbTrendingUp, TbTrendingDown } from "react-icons/tb";

const meta: Meta<typeof KPIIndicator> = {
  title: "Molecules/KPIIndicator",
  component: KPIIndicator,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof KPIIndicator>;

export const Default: Story = {
  args: {
    label: "Total Revenue",
    value: 320000,
    unit: "₺",
    percentageChange: 12.5,
    comparisonText: "compared to last month",
    icon: <TbTrendingUp size={20} />,
  },
};

export const NegativeTrend: Story = {
  args: {
    label: "New Users",
    value: 1250,
    percentageChange: -3.2,
    comparisonText: "compared to last week",
    icon: <TbTrendingDown size={20} />,
  },
};

export const NoTrend: Story = {
  args: {
    label: "Total Orders",
    value: 8400,
    unit: "pcs",
  },
};

export const OnlyValue: Story = {
  args: {
    label: "Open Positions",
    value: 5,
  },
};
