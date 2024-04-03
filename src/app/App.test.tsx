import Box from "@mui/material/Box";
import App from "./App";
import { render } from "@testing-library/react";
import { ComponentProps } from "react";
import { Provider } from "react-redux";
import store from "./stateStore";

vi.mock("@mui/material/Box", () => ({
  default: (props: ComponentProps<typeof Box>) => <div>{props.children}</div>,
}));

vi.mock("../components/header/Header", () => ({
  default: () => <div>Header</div>,
}));

vi.mock("../components/tagsTable/TagsTable", () => ({
  default: () => <div>TagsTable</div>,
}));

describe("Header", () => {
  it("should render the children properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(
      <Provider store={store}>
        <App></App>
      </Provider>
    );

    // ASSERT
    expect(getByText("Header")).toBeInTheDocument();
    expect(getByText("TagsTable")).toBeInTheDocument();
  });
});
