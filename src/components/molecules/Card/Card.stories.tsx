import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import Button from "../../atoms/Button/Button";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Account Summary",
    children: "Your current balance is ₺12,500.",
  },
};

export const WithImage: Story = {
  args: {
    image:
      "https://images.pexels.com/photos/6831290/pexels-photo-6831290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Financial Tips",
    children: "Explore smart ways to save and invest your money.",
    footer: <Button variant="primary">Learn More</Button>,
  },
};

export const WithFooter: Story = {
  args: {
    title: "Transaction",
    children: "This transaction was completed successfully.",
    footer: <Button variant="primary">View Details</Button>,
  },
};

export const Bordered: Story = {
  args: {
    title: "Bordered Card",
    children: "This card has a light border.",
    bordered: true,
  },
};

export const Elevated: Story = {
  args: {
    title: "Elevated Card",
    children: "This card has a stronger shadow effect.",
    elevation: "md",
  },
};

export const Compact: Story = {
  args: {
    title: "Compact Layout",
    children: "This card has reduced padding.",
    padding: "compact",
  },
};

export const NoTitle: Story = {
  args: {
    children: "This card has no title, just content.",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    elevation: "md",
  },
};