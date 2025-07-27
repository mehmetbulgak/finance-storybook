import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email Address",
    placeholder: "example@getmobil.com",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Amount",
    placeholder: "₺0.00",
    helperText: "Please enter a valid amount",
  },
};

export const WithError: Story = {
  args: {
    label: "IBAN",
    placeholder: "TR00 0000 0000 0000",
    error: "Invalid IBAN number",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    disabled: true,
    value: "Read only value",
  },
};

export const Underline: Story = {
  args: {
    label: "Card Number",
    placeholder: "XXXX XXXX XXXX XXXX",
    variant: "underline",
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: "Just a placeholder...",
  },
};
