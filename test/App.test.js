import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../src/App";

describe(" test in <App />", () => {
  test("renders App component", () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
