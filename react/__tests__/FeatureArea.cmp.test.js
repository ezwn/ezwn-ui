import React from "react";
import { mount } from "enzyme";
import FeatureAreaCmp, { FeatureAreaTitle } from "../FeatureArea.cmp";

let wrapped;

beforeEach(() => {
  wrapped = mount(<FeatureAreaCmp />);
});

afterEach(() => {
  wrapped.unmount();
});

it("shows a FeatureAreaTitle", () => {
  expect(wrapped.find(FeatureAreaTitle).length).toEqual(1);
});

describe("open/close behavior", () => {

  beforeEach(() => {
    expect(wrapped.state().opened).toEqual(false);
  });

  it("doesn't show the content if it is close", () => {
    expect(wrapped.find(".feature-area-content").length).toEqual(0);
  });

  it("opens on first click on the title", () => {
    const featureAreaTitle = wrapped.find(FeatureAreaTitle);
    featureAreaTitle.simulate("click");
    expect(wrapped.state().opened).toEqual(true);
  });

  it("shows the content if it is open", () => {
    const featureAreaTitle = wrapped.find(FeatureAreaTitle);
    featureAreaTitle.simulate("click");
    expect(wrapped.state().opened).toEqual(true);
    expect(wrapped.find(".feature-area-content").length).toEqual(1);
  });
});
