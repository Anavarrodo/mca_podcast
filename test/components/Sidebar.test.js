const { render, fireEvent } = require("@testing-library/react");
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContext } from "../../src/context/context";
import Sidebar from "../../src/components/Sidebar";
import { sidebarMock } from "./__mocks__";

const setCurrentLocation = jest.fn();
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("test by <Sidebar /> ", () => {
  test("renders without error", () => {
    const { getByTestId } = render(
      <Router>
        <AppContext.Provider value={{ setCurrentLocation }}>
          <Sidebar info={sidebarMock} />
        </AppContext.Provider>
      </Router>
    );

    expect(getByTestId("sidebar").innerHTML).toBeTruthy();
  });

  test("calls setCurrentLocation and navigate when image-content is clicked", () => {
    const { getByTestId } = render(
      <Router>
        <AppContext.Provider value={{ setCurrentLocation }}>
          <Sidebar info={sidebarMock} />
        </AppContext.Provider>
      </Router>
    );

    fireEvent.click(getByTestId("sidebar-image"));
    expect(setCurrentLocation).toHaveBeenCalledWith("");
    expect(mockNavigate).toHaveBeenCalledWith(-1);

    fireEvent.click(getByTestId("sidebar-content"));
    expect(setCurrentLocation).toHaveBeenCalledWith("");
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
