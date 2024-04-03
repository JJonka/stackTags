import type { Meta, StoryObj } from "@storybook/react";
import GeneralTable from "../../components/tagsTable/GeneralTableUI";

const meta: Meta<typeof GeneralTable> = {
  title: "Designs/Organisms/GeneralTable",
  component: GeneralTable,
  argTypes: {
    handlers: {
      control: false,
    },
    page: {
      control: false,
    },
    rowsPerPage: {
      control: false,
    },
    orderBy: {
      control: false,
    },
    orderDirection: {
      control: false,
    },
  },
  render: ({ ...args }) => (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <GeneralTable {...args}></GeneralTable>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryGeneralTable: Story = {
  args: {
    headCells: ["name", "count"],
    sortCells: ["name", "popular"],
    currentArray: [{ name: "javascript", count: 10 }],
    loading: false,
    error: null,
    page: 0,
    rowsPerPage: 10,
    orderBy: "name",
    orderDirection: "asc",
    total: 100,
    handlers: {
      handleChangePage: (_event, newPage) => newPage,
      handleChangeRowsPerPage: (event) => event.target.value,
      sortHandler: (sortBy) => sortBy,
    },
  },
};
