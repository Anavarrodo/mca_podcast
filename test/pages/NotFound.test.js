import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../../src/pages/NotFound";
import { AppContext } from "../../src/context/context";

const setCurrentLocation = jest.fn();

describe("NotFound", () => {
  test("renders without error", () => {
    const { getByTestId } = render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/quieroiraunpodcastespecifico",
          },
        ]}
      >
        <AppContext.Provider value={{ setCurrentLocation }}>
          <NotFound />
        </AppContext.Provider>
      </MemoryRouter>
    );
    expect(getByTestId("not_found")).toBeInTheDocument();
  });
});
