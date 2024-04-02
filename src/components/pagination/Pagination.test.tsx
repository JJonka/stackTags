import { render } from "@testing-library/react";
import Pagination from "./Pagination";
import TablePagination from "@mui/material/TablePagination";
import { ComponentProps } from "react";

vi.mock("@mui/material/TablePagination", () => ({
  default: (props: ComponentProps<typeof TablePagination>) => (
    <div>Pagination</div>
  ),
}));

describe("Header", () => {
  it("should render the children properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Pagination></Pagination>);

    // ASSERT
    expect(getByText("Pagination")).toBeInTheDocument();
  });
});
