import type { Meta, StoryObj } from "@storybook/react";
import TransactionItem from "./TransactionItem";
import {
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaArrowDown,
} from "react-icons/fa";

const meta: Meta<typeof TransactionItem> = {
  title: "Molecules/TransactionItem",
  component: TransactionItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TransactionItem>;

export const Expense: Story = {
  args: {
    title: "Amazon.com",
    subtitle: "Online purchase",
    amount: 350,
    type: "expense",
    currency: "₺",
    date: "June 12, 2025, 14:20",
    icon: <FaShoppingCart size={18} />,
  },
};

export const Income: Story = {
  args: {
    title: "Bank Transfer",
    subtitle: "IBAN: TR00 1234 **** **** 89",
    amount: 1200,
    type: "income",
    currency: "₺",
    date: "June 11, 2025, 09:05",
    icon: <FaArrowDown size={18} />,
  },
};

export const Minimal: Story = {
  args: {
    title: "Rent Payment",
    amount: 2400,
    type: "expense",
  },
};

export const WithCustomIcon: Story = {
  args: {
    title: "Salary Received",
    amount: 8500,
    type: "income",
    icon: <FaMoneyCheckAlt size={18} />,
    date: "June 1, 2025",
  },
};
