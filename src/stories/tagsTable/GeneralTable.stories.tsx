import type { Meta, StoryObj } from "@storybook/react";
import GeneralTable, {
  SortBy,
} from "../../components/tagsTable/GeneralTableUI";
import { useState } from "react";
import { sortByCount, sortByName } from "../helpers/sort";
import { tableData } from "../mocks/tableData";

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
    headCells: {
      control: false,
    },
    sortCells: {
      control: false,
    },
    total: {
      control: false,
    },
  },
  render: ({ ...args }) => {
    const [pageNum, setPage] = useState(0);
    const [rowsPerPageNum, setRowsPerPage] = useState(10);
    const [orderDirectionState, setOrderDirection] = useState<"asc" | "desc">(
      "asc"
    );
    const [orderByState, setOrderBy] = useState<SortBy>("name");
    const [dataArray, setDataArray] = useState(tableData);

    const handleChangePage = (
      _event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number
    ) => setPage(newPage);

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const sortHandler = (sortBy: SortBy) => {
      const sortDirection = orderDirectionState === "asc" ? "desc" : "asc";
      const sortedArray =
        sortBy !== "popular"
          ? sortByName(dataArray, sortDirection)
          : sortByCount(dataArray, sortDirection);
      setOrderDirection(sortDirection);
      setOrderBy(sortBy);
      setDataArray(sortedArray);
    };

    const slicedData = () =>
      dataArray.slice(
        pageNum * rowsPerPageNum,
        pageNum * rowsPerPageNum + rowsPerPageNum
      );

    const props = {
      ...args,
      page: pageNum,
      rowsPerPage: rowsPerPageNum,
      orderBy: orderByState,
      orderDirection: orderDirectionState,
      headCells: ["name", "count"],
      sortCells: ["name", "popular"] as SortBy[],
      total: dataArray.length,
      handlers: {
        handleChangePage: handleChangePage,
        handleChangeRowsPerPage: handleChangeRowsPerPage,
        sortHandler: sortHandler,
      },
      currentArray: slicedData(),
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "150px",
        }}
      >
        <GeneralTable {...props}></GeneralTable>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryGeneralTable: Story = {
  args: {
    loading: false,
    error: null,
  },
};

export const LoadingGeneralTable: Story = {
  args: {
    loading: true,
    error: null,
  },
};

export const ErrorGeneralTable: Story = {
  args: {
    loading: false,
    error: { message: "Error occured." },
  },
};
