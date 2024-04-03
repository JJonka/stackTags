import type { Meta, StoryObj } from "@storybook/react";
import Header from "../../components/header/Header";

const meta: Meta<typeof Header> = {
  title: "Designs/Molecules/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryHeader: Story = {
  args: {
    children: "Header",
  },
};
