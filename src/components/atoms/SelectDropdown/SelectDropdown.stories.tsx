import type { Meta, StoryObj } from "@storybook/react";
import SelectDropdown from "./SelectDropdown";

const meta: Meta<typeof SelectDropdown> = {
  title: "Atoms/SelectDropdown",
  component: SelectDropdown,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof SelectDropdown>;

const sampleOptions = [
  { label: "USD - US Dollar", value: "usd" },
  { label: "EUR - Euro", value: "eur" },
  { label: "GBP - British Pound", value: "gbp" },
  { label: "TRY - Turkish Lira", value: "try" },
];

export const Default: Story = {
  args: {
    label: "Currency",
    placeholder: "Select currency...",
    options: sampleOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Currency",
    placeholder: "Choose one",
    options: sampleOptions,
    helperText: "You can change this later.",
  },
};

export const WithError: Story = {
  args: {
    label: "Currency",
    placeholder: "Select currency",
    options: sampleOptions,
    error: "Please select a currency.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Currency",
    placeholder: "Select currency",
    options: sampleOptions,
    isDisabled: true,
  },
};
