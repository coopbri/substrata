import { render } from "test/setup";
import Home from "pages/index";

describe("Home page", () => {
  it("renders without crashing", () => {
    render(<Home />, {});
  });
});
