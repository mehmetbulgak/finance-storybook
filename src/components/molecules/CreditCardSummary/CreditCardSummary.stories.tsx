import type { Meta, StoryObj } from "@storybook/react";
import CreditCardSummary from "./CreditCardSummary";

const meta: Meta<typeof CreditCardSummary> = {
  title: "Molecules/CreditCardSummary",
  component: CreditCardSummary,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CreditCardSummary>;

export const Default: Story = {
  args: {
    cardholderName: "John Doe",
    cardType: "Visa",
    last4Digits: "4521",
    expiry: "12/26",
    balance: 4200,
    availableLimit: 2800,
    currency: "$",
    status: "active",
  },
};

export const LightTheme: Story = {
    args: {
      ...Default.args,
      variant: "light",
    },
  };
  
  export const AccentTheme: Story = {
    args: {
      ...Default.args,
      variant: "accent",
    },
  };
  

export const BlockedCard: Story = {
  args: {
    cardholderName: "Alice Smith",
    cardType: "MasterCard",
    last4Digits: "6789",
    expiry: "06/25",
    balance: 12500,
    availableLimit: 0,
    currency: "₺",
    status: "blocked",
  },
};

export const ExpiredCard: Story = {
  args: {
    cardholderName: "Michael Johnson",
    cardType: "Amex",
    last4Digits: "9911",
    expiry: "03/23",
    balance: 500,
    availableLimit: 1500,
    currency: "€",
    status: "expired",
  },
};

export const ClickableCard: Story = {
  args: {
    cardholderName: "Emma Brown",
    cardType: "Troy",
    last4Digits: "3344",
    expiry: "11/27",
    balance: 850,
    availableLimit: 1150,
    status: "active",
    onClick: () => alert("Card clicked"),
  },
};
