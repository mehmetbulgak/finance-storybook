import type { Meta, StoryObj } from "@storybook/react";
import FinancialOverviewPanel from "./FinancialOverviewPanel";
import {
  FaArrowUp,
  FaArrowDown,
  FaMoneyBillWave,
  FaBitcoin,
  FaChartLine,
  FaUniversity,
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaExclamationCircle,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const meta: Meta<typeof FinancialOverviewPanel> = {
  title: "Organisms/FinancialOverviewPanel",
  component: FinancialOverviewPanel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FinancialOverviewPanel>;

export const Default: Story = {
  args: {
    kpis: [
      {
        label: "Net Worth",
        value: 320000,
        unit: "₺",
        percentageChange: 6.4,
        comparisonText: "compared to last month",
        icon: <FaArrowUp size={20} />,
      },
      {
        label: "Monthly Income",
        value: 18000,
        unit: "₺",
        percentageChange: 2.1,
        comparisonText: "compared to last month",
        icon: <FaArrowUp size={20} />,
      },
      {
        label: "Monthly Expenses",
        value: 9500,
        unit: "₺",
        percentageChange: -1.5,
        comparisonText: "compared to last month",
        icon: <FaArrowDown size={20} />,
      },
    ],
    portfolio: {
      currency: "₺",
      items: [
        {
          label: "Cash",
          value: 80000,
          icon: <FaMoneyBillWave />,
        },
        {
          label: "Stocks",
          value: 120000,
          icon: <FaChartLine />,
        },
        {
          label: "Crypto",
          value: 60000,
          icon: <FaBitcoin />,
        },
        {
          label: "Bonds",
          value: 60000,
          icon: <FaUniversity />,
        },
      ],
    },
    transactions: [
      {
        title: "Amazon.com",
        subtitle: "Online purchase",
        amount: 350,
        type: "expense",
        date: "12 June 2025, 14:20",
        icon: <FaShoppingCart size={18} />,
        currency: "₺",
      },
      {
        title: "Salary Payment",
        subtitle: "From HR",
        amount: 12000,
        type: "income",
        date: "10 June 2025, 09:00",
        icon: <FaMoneyCheckAlt size={18} />,
        currency: "₺",
      },
    ],
    bills: [
      {
        title: "Electricity Bill",
        description: "June 2025 Invoice",
        amount: 350,
        dueDate: "20 June 2025",
        status: "upcoming",
        icon: <FaClock />,
        currency: "₺",
      },
      {
        title: "Water Bill",
        description: "May 2025 Invoice",
        amount: 120,
        dueDate: "10 June 2025",
        status: "overdue",
        icon: <FaExclamationCircle />,
        onPayClick: () => alert("Redirecting to payment..."),
        currency: "₺",
      },
      {
        title: "Internet Bill",
        description: "Paid on 1 June 2025",
        amount: 250,
        dueDate: "1 June 2025",
        status: "paid",
        icon: <FaCheckCircle />,
        currency: "₺",
      },
    ],
  },
};
