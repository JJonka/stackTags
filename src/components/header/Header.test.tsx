import { render } from "@testing-library/react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ComponentProps } from "react";
import { ReactSVG } from "react-svg";

vi.mock("@mui/material/Box", () => ({
  default: (props: ComponentProps<typeof Box>) => <div>{props.children}</div>,
}));

vi.mock("@mui/material/Typography", () => ({
  default: (props: ComponentProps<typeof Typography>) => (
    <div>{props.children}</div>
  ),
}));

vi.mock("react-svg", () => ({
  ReactSVG: vi
    .fn()
    .mockImplementation((props: ComponentProps<typeof ReactSVG>) => (
      <div>{props.src}</div>
    )),
}));

describe("Header", () => {
  it("should render the children properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(
      <Header fontColor="black" bgrColor="white" iconSrc="/assets/logo.svg">
        Header
      </Header>
    );

    // ASSERT
    expect(getByText("Header")).toBeInTheDocument();
    expect(getByText("/assets/logo.svg")).toBeInTheDocument();
  });
});
