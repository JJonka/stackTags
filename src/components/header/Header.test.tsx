import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

vi.mock("../searchBar/SearchBar.tsx", () => ({
  SearchBar: () => <div>SearchBar</div>,
}));

vi.mock("../menu/Menu.tsx", () => ({
  Menu: () => <div>Menu</div>,
}));

describe("LinkToPage", () => {
  it("should render the children properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Header>Header</Header>);

    // ASSERT
    expect(getByText("SearchBar")).toBeInTheDocument();
    expect(getByText("Menu")).toBeInTheDocument();
  });
});
