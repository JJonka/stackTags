import { render } from "@testing-library/react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ComponentProps } from "react";

vi.mock("@mui/material/Box", () => ({
  default: (props: ComponentProps<typeof Box>) => <div>{props.children}</div>,
}));

vi.mock("@mui/material/Typography", () => ({
  default: (props: ComponentProps<typeof Typography>) => (
    <div>{props.children}</div>
  ),
}));

describe("Header", () => {
  it("should render the children properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Header>Header</Header>);

    // ASSERT
    expect(getByText("Header")).toBeInTheDocument();
  });
});
