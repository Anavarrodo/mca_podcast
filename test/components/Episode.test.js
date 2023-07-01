const { render } = require("@testing-library/react");
import "@testing-library/jest-dom/extend-expect";
import Episode from "../../src/components/Episode";
import { AppContext } from "../../src/context/context";
import { episodeMock } from "./__mocks__";

const setCurrentLocation = jest.fn();

describe("test by <Episode /> ", () => {
  test("renders without error", () => {
    const { getByTestId } = render(
      <AppContext.Provider value={{ setCurrentLocation }}>
        <Episode info={episodeMock} />
      </AppContext.Provider>
    );

    expect(getByTestId("episode").innerHTML).toBeTruthy();
  });

  test("renders title, description and url/audio correctly", () => {
    const { getByText, getByTestId } = render(
      <AppContext.Provider value={{ setCurrentLocation }}>
        <Episode info={episodeMock} />
      </AppContext.Provider>
    );

    expect(
      getByText(
        'Can "Cruel Summer" Still Be the Song of the Summer? | Every Single Album: Taylor Swift'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        `Nora and Nathan talk about the news that "Cruel Summer," from Taylor Swift's 2019 album, 'Lover,' was released this week as a single. They talk about whether the move could bump the song to the top of the charts (1:00) and why she might have decided to make "ME!" the first single off of 'Lover' instead (18:20). Hosts: Nora Princiotti and Nathan Hubbard Producer: Kaya McMullen Learn more about your ad choices. Visit podcastchoices.com/adchoices`
      )
    ).toBeInTheDocument();
    expect(getByTestId("reproductor")).toHaveAttribute(
      "src",
      episodeMock.enclosure["@_url"]
    );
  });
});
