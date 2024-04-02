import type { Meta, StoryObj } from "@storybook/react";
import TablePagination from "@mui/material/TablePagination";

const meta: Meta<typeof TablePagination> = {
  title: "TablePagination",
  component: TablePagination,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryTablePagination: Story = {
  args: {
    count: 100,
    page: 1,
    rowsPerPage: 10,
  },
};
