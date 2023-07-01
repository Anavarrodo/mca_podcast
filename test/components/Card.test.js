const { render, fireEvent } = require("@testing-library/react");
import "@testing-library/jest-dom/extend-expect";
import Card from "../../src/components/Card";
import { cardMock } from "./__mocks__";

describe("test by <Card /> ", () => {
  test("renders without error", () => {
    const { getByTestId } = render(<Card data={cardMock} />);

    expect(getByTestId("card").innerHTML).toBeTruthy();
  });

  test("use data props correctly", () => {
    const { getByText } = render(<Card data={cardMock} />);

    expect(getByText("Tay To Z: A Taylor Swift Podcast")).toBeInTheDocument();
    expect(getByText("Author: Devin and Gab")).toBeInTheDocument();
  });

  it("calls onClick when the component is clicked", () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <Card data={cardMock} onClick={mockOnClick} />
    );

    fireEvent.click(getByTestId("card"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
