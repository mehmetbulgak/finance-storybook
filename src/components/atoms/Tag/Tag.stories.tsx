import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";
import { MdCheck, MdClose } from "react-icons/md";

const meta: Meta<typeof Tag> = {
  title: "Atoms/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    onClose: { action: "closed" },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Tag",
    variant: "default",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Error",
    variant: "danger",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Approved",
    variant: "success",
    icon: <MdCheck />,
  },
};

export const Closable: Story = {
  args: {
    children: "Closable",
    closable: true,
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded",
    variant: "default",
    rounded: true,
  },
};
