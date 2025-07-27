import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import { MdLock } from "react-icons/md";

const meta: Meta<typeof Alert> = {
  title: "Atoms/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    onClose: { action: "closed" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    children: "This is an informational alert.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    children: "Your transaction was successful.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "You are about to exceed your account limit.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    children: "Something went wrong. Please try again.",
  },
};

export const Closable: Story = {
  args: {
    variant: "info",
    title: "Dismissible Alert",
    children: "This alert can be closed.",
    closable: true,
  },
};

export const WithCustomIcon: Story = {
  args: {
    variant: "info",
    title: "Custom Icon",
    children: "This alert uses a custom icon.",
    icon: <MdLock />,
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: "success",
    children: "This alert has no title, only a message.",
  },
};
