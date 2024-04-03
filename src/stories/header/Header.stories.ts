import type { Meta, StoryObj } from "@storybook/react";
import Header from "../../components/header/Header";

const meta: Meta<typeof Header> = {
  title: "Designs/Molecules/Header",
  component: Header,
  argTypes: {
    iconSrc: {
      control: false,
    },
    fontColor: {
      control: false,
    },
    bgrColor: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryHeader: Story = {
  args: {
    iconSrc: "/assets/logo.svg",
    children: "Header",
    fontColor: "white",
    bgrColor: "dodgerblue",
  },
};
