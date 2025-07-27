import type { Meta, StoryObj } from "@storybook/react";
import SpendingSummary, { SpendingSummaryProps } from "./SpendingSummary";
import Button from "../../atoms/Button/Button";

const meta: Meta<typeof SpendingSummary> = {
  title: "Molecules/SpendingSummary",
  component: SpendingSummary,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SpendingSummary>;

const baseArgs: SpendingSummaryProps = {
  label: "Spending Summary",
  periodLabel: "June 1 – 15",
  currentAmount: 3500,
  comparisonAmount: 2800,
  budgetLimit: 5000,
  currency: "₺",
  categories: [
    { name: "Groceries", amount: 1200, color: "#0070f3" },
    { name: "Transport", amount: 600, color: "#1b9e5f" },
    { name: "Bills", amount: 800, color: "#d9822b" },
    { name: "Other", amount: 900, color: "#e53935" },
  ],
};

export const Default: Story = {
  args: baseArgs,
};

export const WithoutProgress: Story = {
  args: {
    ...baseArgs,
    showProgress: false,
  },
};

export const WithoutTrend: Story = {
  args: {
    ...baseArgs,
    showTrend: false,
  },
};

export const WithOnlyBreakdown: Story = {
  args: {
    label: "Category Spending",
    currentAmount: 0,
    showProgress: false,
    showTrend: false,
    currency: "₺",
    categories: baseArgs.categories,
  },
};

export const WithCustomDatePicker: Story = {
  args: {
    ...baseArgs,
    dateRangePicker: <Button variant="primary">Select Date</Button>,
  },
};
