import ReactDOM from "react-dom";
import React from "react";
import data from "../data/data.json";
import { render } from "@testing-library/react";
import Timeline from "../timeline/timeline";
import renderer from "react-test-renderer";

it("it renders correctly", () => {
	const timeline = document.createElement("div");
	ReactDOM.render(<div />, timeline);
	ReactDOM.unmountComponentAtNode(timeline);
});

it("it maps data correctly", () => {
	render(<Timeline data={[data]} />);
});

it("it maps data according to snapshot", () => {
	const timeline = renderer.create(<Timeline data={[data]} />);
	expect(timeline).toMatchSnapshot();
});
