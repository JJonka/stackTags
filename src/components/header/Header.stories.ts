import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  argTypes: {
    iconSrc: {
      control: false,
    },
    fontColor: {
      options: ["black", "white", "orange"],
      control: { type: "radio" },
    },
    bgrColor: {
      options: ["dodgerblue", "black", "orange"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BlueHeader: Story = {
  args: {
    iconSrc: "/assets/logo.svg",
    children: "Header",
    fontColor: "white",
    bgrColor: "dodgerblue",
  },
};

export const GreyHeader: Story = {
  args: {
    iconSrc: "/assets/logo.svg",
    children: "Header",
    fontColor: "white",
    bgrColor: "grey",
  },
};

export const BlackHeader: Story = {
  args: {
    iconSrc: "/assets/logo.svg",
    children: "Header",
    fontColor: "orange",
    bgrColor: "black",
  },
};
