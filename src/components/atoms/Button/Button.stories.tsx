import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { MdAdd } from "react-icons/md";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Submit",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Cancel",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "Delete",
    variant: "danger",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    children: "Learn More",
    variant: "link",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Settings",
    variant: "tertiary",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Add",
    iconLeft: <MdAdd />,
    variant: "primary",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    loading: true,
    variant: "primary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "primary",
    disabled: true,
  },
};
