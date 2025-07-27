import type { Meta, StoryObj } from "@storybook/react";
import PortfolioOverviewCard from "./PortfolioOverviewCard";
import {
  FaMoneyBillWave,
  FaBitcoin,
  FaChartLine,
  FaUniversity,
} from "react-icons/fa";

const meta: Meta<typeof PortfolioOverviewCard> = {
  title: "Molecules/PortfolioOverviewCard",
  component: PortfolioOverviewCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PortfolioOverviewCard>;

export const Default: Story = {
  args: {
    currency: "₺",
    showPercentage: true,
    items: [
      {
        label: "Cash",
        value: 40000,
        icon: <FaMoneyBillWave />,
      },
      {
        label: "Stocks",
        value: 90000,
        icon: <FaChartLine />,
      },
      {
        label: "Crypto",
        value: 30000,
        icon: <FaBitcoin />,
      },
      {
        label: "Bonds",
        value: 40000,
        icon: <FaUniversity />,
      },
    ],
  },
};
