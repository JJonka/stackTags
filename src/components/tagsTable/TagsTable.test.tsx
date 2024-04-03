import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { render } from "@testing-library/react";
import Box from "@mui/material/Box";
import { ComponentProps } from "react";
import GeneralTable from "./GeneralTableUI";
import { SerializedError } from "@reduxjs/toolkit";

vi.mock("@mui/material/Table", () => ({
  default: (props: ComponentProps<typeof Table>) => <div>{props.children}</div>,
}));

vi.mock("@mui/material/TableBody", () => ({
  default: (props: ComponentProps<typeof TableBody>) => (
    <div>{props.children}</div>
  ),
}));

vi.mock("@mui/material/TableCell", () => ({
  default: (props: ComponentProps<typeof TableCell>) => (
    <div>{props.children}</div>
  ),
}));

vi.mock("@mui/material/TableContainer", () => ({
  default: (props: ComponentProps<typeof TableContainer>) => (
    <div>{props.children}</div>
  ),
}));

vi.mock("@mui/material/TableRow", () => ({
  default: (props: ComponentProps<typeof TableRow>) => (
    <div>{props.children}</div>
  ),
}));

vi.mock("@mui/material/TableHead", () => ({
  default: (props: ComponentProps<typeof TableHead>) => (
    <div>{props.children}</div>
  ),
}));

vi.mock("@mui/material/TableSortLabel", () => ({
  default: (props: ComponentProps<typeof TableSortLabel>) => (
    <div>{props.children}</div>
  ),
}));

vi.mock("@mui/material/TablePagination", () => ({
  default: () => <div>Pagination</div>,
}));
vi.mock("@mui/material/Box", () => ({
  default: (props: ComponentProps<typeof Box>) => <div>{props.children}</div>,
}));

vi.mock("@mui/material/Alert", () => ({
  default: () => <div>Alert</div>,
}));

vi.mock("@mui/material/CircularProgress", () => ({
  default: () => <div>CircularProgress</div>,
}));

describe("GeneralTable", () => {
  it("should render table and pagination components, when loading is false and error is null", () => {
    // ARRANGE && ACT
    const { getByText } = render(
      <GeneralTable
        loading={false}
        error={null}
        headCells={["name", "count"]}
        sortCells={["name", "popular"]}
        currentArray={[{ name: "javascript", count: 10 }]}
        page={0}
        rowsPerPage={10}
        orderBy={"name"}
        orderDirection={"asc"}
        total={100}
        handlers={{
          handleChangePage: (newPage) => newPage,
          handleChangeRowsPerPage: (event) => event.target.value,
          sortHandler: (sortBy) => sortBy,
        }}
      ></GeneralTable>
    );

    // ASSERT
    expect(getByText("javascript")).toBeInTheDocument();
    expect(getByText("COUNT")).toBeInTheDocument();
    expect(getByText("NAME")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
  });

  it("should render loading component, when loading is true and error is null", () => {
    // ARRANGE && ACT
    const { getByText } = render(
      <GeneralTable
        loading={true}
        error={null}
        headCells={["name", "count"]}
        sortCells={["name", "popular"]}
        currentArray={[{ name: "javascript", count: 10 }]}
        page={0}
        rowsPerPage={10}
        orderBy={"name"}
        orderDirection={"asc"}
        total={100}
        handlers={{
          handleChangePage: (_event, newPage) => newPage,
          handleChangeRowsPerPage: (event) => event.target.value,
          sortHandler: (sortBy) => sortBy,
        }}
      ></GeneralTable>
    );

    // ASSERT
    expect(getByText("CircularProgress")).toBeInTheDocument();
  });

  it("should render loading component, when loading is true and error is not null", () => {
    // ARRANGE && ACT
    const { getByText } = render(
      <GeneralTable
        loading={false}
        error={{} as SerializedError}
        headCells={["name", "count"]}
        sortCells={["name", "popular"]}
        currentArray={[{ name: "javascript", count: 10 }]}
        page={0}
        rowsPerPage={10}
        orderBy={"name"}
        orderDirection={"asc"}
        total={100}
        handlers={{
          handleChangePage: (_event, newPage) => newPage,
          handleChangeRowsPerPage: (event) => event.target.value,
          sortHandler: (sortBy) => sortBy,
        }}
      ></GeneralTable>
    );

    // ASSERT
    expect(getByText("Alert")).toBeInTheDocument();
  });
});
