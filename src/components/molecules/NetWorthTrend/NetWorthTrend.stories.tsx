import type { Meta, StoryObj } from "@storybook/react";
import NetWorthTrend from "./NetWorthTrend";

const meta: Meta<typeof NetWorthTrend> = {
  title: "Molecules/NetWorthTrend",
  component: NetWorthTrend,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NetWorthTrend>;

export const Default: Story = {
  args: {
    currency: "₺",
    data: [
      { date: "Jan", value: 100000 },
      { date: "Feb", value: 110000 },
      { date: "Mar", value: 105000 },
      { date: "Apr", value: 115000 },
      { date: "May", value: 130000 },
    ],
  },
};

export const Declining: Story = {
  args: {
    currency: "$",
    data: [
      { date: "Jan", value: 150000 },
      { date: "Feb", value: 140000 },
      { date: "Mar", value: 130000 },
      { date: "Apr", value: 125000 },
      { date: "May", value: 120000 },
    ],
  },
};
