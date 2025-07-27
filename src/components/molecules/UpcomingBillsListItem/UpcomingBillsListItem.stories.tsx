import type { Meta, StoryObj } from "@storybook/react";
import UpcomingBillsListItem from "./UpcomingBillsListItem";
import { FaExclamationCircle, FaClock, FaCheckCircle } from "react-icons/fa";

const meta: Meta<typeof UpcomingBillsListItem> = {
  title: "Molecules/UpcomingBillsListItem",
  component: UpcomingBillsListItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof UpcomingBillsListItem>;

export const Upcoming: Story = {
  args: {
    title: "Electricity Bill",
    description: "June 2025 Invoice",
    amount: 350,
    currency: "₺",
    dueDate: "20 June 2025",
    status: "upcoming",
    icon: <FaClock />,
  },
};

export const Overdue: Story = {
  args: {
    title: "Water Bill",
    description: "May 2025 Invoice",
    amount: 120,
    currency: "₺",
    dueDate: "10 June 2025",
    status: "overdue",
    icon: <FaExclamationCircle />,
    onPayClick: () => alert("Redirecting to payment..."),
  },
};

export const Paid: Story = {
  args: {
    title: "Internet Bill",
    description: "Paid on 1 June 2025",
    amount: 250,
    currency: "₺",
    dueDate: "1 June 2025",
    status: "paid",
    icon: <FaCheckCircle />,
  },
};
