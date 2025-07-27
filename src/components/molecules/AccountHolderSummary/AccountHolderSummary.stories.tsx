import type { Meta, StoryObj } from "@storybook/react";
import AccountHolderSummary from "./AccountHolderSummary";
import { FiMoreVertical } from "react-icons/fi";

const meta: Meta<typeof AccountHolderSummary> = {
  title: "Molecules/AccountHolderSummary",
  component: AccountHolderSummary,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AccountHolderSummary>;

export const Default: Story = {
  args: {
    name: "Jane Doe",
    accountNumber: "ACC123456789",
    iban: "TR00 1234 5678 9012 3456 78",
    balance: 12500,
    currency: "₺",
    status: "active",
    email: "jane.doe@example.com",
    phone: "+90 532 000 00 00",
    note: "Primary personal account",
    showCopyButtons: true,
    showDetailsLink: true,
  },
};

export const WithAvatarAndActions: Story = {
  args: {
    ...Default.args,
    avatarUrl: "https://i.pravatar.cc/100?img=31",
    status: "pending",
    actions: <FiMoreVertical />,
  },
};

export const SuspendedAccount: Story = {
  args: {
    name: "John Smith",
    iban: "TR42 0006 4000 0011 2345 6789 01",
    balance: 0,
    currency: "$",
    status: "suspended",
    note: "This account is temporarily suspended",
  },
};

export const ClickableCard: Story = {
  args: {
    ...Default.args,
    onClick: () => alert("Card clicked"),
  },
};
