const { render, fireEvent } = require("@testing-library/react");
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import Header from "../../src/components/Header";
import { AppContext } from "../../src/context/context";

const setCurrentLocation = jest.fn();
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: MemoryRouter });
};

describe("test by <Header /> ", () => {
  test("renders without error", () => {
    const { getByTestId } = render(
      <Router>
        <AppContext.Provider value={{ setCurrentLocation }}>
          <Header />
        </AppContext.Provider>
      </Router>
    );

    expect(getByTestId("header").innerHTML).toBeTruthy();
  });

  test("calls setCurrentLocation and navigate when Link is clicked", () => {
    const { getByText } = renderWithRouter(
      <AppContext.Provider
        value={{ currentLocation: "Details", setCurrentLocation }}
      >
        <Header />
      </AppContext.Provider>
    );

    fireEvent.click(getByText("Podcaster"));

    expect(setCurrentLocation).toHaveBeenCalledWith("");
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  test(`don't show LoadingContent when currentLocation`, () => {
    const { queryByTestId } = renderWithRouter(
      <AppContext.Provider
        value={{ currentLocation: "Details", setCurrentLocation }}
      >
        <Header />
      </AppContext.Provider>
    );
    expect(queryByTestId("loading-content")).toBeNull();
  });

  test("renders LoadingContent when currentLocation is empty", () => {
    const { getByTestId } = renderWithRouter(
      <AppContext.Provider value={{ currentLocation: "", setCurrentLocation }}>
        <Header />
      </AppContext.Provider>
    );
    expect(getByTestId("loading-content")).toBeInTheDocument();
  });
});
