import type { Meta, StoryObj } from "@storybook/react";
import AccountOverviewPanel from "./AccountOverviewPanel";
import { FaMoneyBill, FaUtensils } from "react-icons/fa";

const meta: Meta<typeof AccountOverviewPanel> = {
  title: "Organisms/AccountOverviewPanel",
  component: AccountOverviewPanel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AccountOverviewPanel>;

export const Default: Story = {
  args: {
    name: "John Doe",
    avatarUrl: "https://i.pravatar.cc/100?img=8",
    status: "active",
    balance: 12500,
    balanceChange: 4.2,
    currency: "₺",
    recentTransactions: [
      {
        title: "Salary",
        subtitle: "Company ABC",
        amount: 9500,
        type: "income",
        date: "2025-06-10",
        icon: <FaMoneyBill />,
      },
      {
        title: "Dinner",
        subtitle: "Restaurant",
        amount: 250,
        type: "expense",
        date: "2025-06-12",
        icon: <FaUtensils />,
      },
    ],
    linkedCards: [
      {
        cardType: "Visa",
        lastDigits: "1234",
        expiry: "12/26",
      },
      {
        cardType: "MasterCard",
        lastDigits: "5678",
        expiry: "08/25",
      },
    ],
  },
};
