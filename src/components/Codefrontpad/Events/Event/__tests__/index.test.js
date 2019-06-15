import React from "react";
import { shallow, mount, render } from "enzyme";
import "jest-styled-components";

import Event from "../index";
import { StyledDetails, StyledShowDetails } from "../styled";

describe("Render <Event/>", () => {
  test("Render with all props", () => {
    const event = {
      id: 0,
      name: "name",
      url: "url",
      starts_at: new Date(2019, 7, 15, 19, 0),
      description_short: "description_short",
      description_html: "description_html"
    };
    const wrapper = shallow(<Event event={event} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Render without description html", () => {
    const event = {
      id: 0,
      name: "name",
      url: "url",
      starts_at: new Date(2019, 7, 15, 19, 0),
      description_short: "description_short"
    };
    const wrapper = shallow(<Event event={event} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Render with description_html. Shoud be max-height 25px for isDetailsExpanded eq false", () => {
    const event = {
      id: 0,
      name: "name",
      url: "url",
      starts_at: new Date(2019, 7, 15, 19, 0),
      description_short: "description_short",
      description_html: "description_html"
    };
    const wrapper = mount(<Event event={event} />);
    const details = wrapper.find(StyledDetails);
    expect(details).toHaveLength(1);
    expect(wrapper.find(StyledDetails).first()).toHaveStyleRule(
      "max-height",
      "25px"
    );
  });

  it("Render with description_html. Shoud be full height for isDetailsExpanded eq true", () => {
    const event = {
      id: 0,
      name: "name",
      url: "url",
      starts_at: new Date(2019, 7, 15, 19, 0),
      description_short: "description_short",
      description_html: "description_html"
    };
    const wrapper = mount(<Event event={event} />);

    const submitButton = wrapper.find(StyledShowDetails);
    submitButton.simulate("click");

    const details = wrapper.find(StyledDetails);
    expect(details).toHaveLength(1);
    expect(wrapper.find(StyledDetails).first()).not.toHaveStyleRule(
      "max-height",
      "25px"
    );
  });
});
