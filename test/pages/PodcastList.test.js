import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import PodcastList from "../../src/pages/PodcastList";
import { AppContext } from "../../src/context/context";

const setCurrentLocation = jest.fn();

describe("PodcastList", () => {
  test("renders without error", () => {
    const { getByTestId } = render(
      <Router>
        <AppContext.Provider value={{ setCurrentLocation: setCurrentLocation }}>
          <PodcastList />
        </AppContext.Provider>
      </Router>
    );
    expect(getByTestId("podcast-list")).toBeInTheDocument();
  });
});
