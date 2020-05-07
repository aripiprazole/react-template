import React from "react";

import App from "~/App";

import { shallow } from "enzyme";

describe("App tests", () => {
  it("should render correctly", () => {
    const tree = shallow(<App />).html();

    expect(tree).toMatchSnapshot();
  });
});
