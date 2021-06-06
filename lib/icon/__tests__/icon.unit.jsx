import * as renderer from "react-test-renderer";
import React from "react";
import Icon from "../icon";
import { mount } from "enzyme";

describe("Icon", () => {
	it("render 成功", () => {
		const json = renderer.create(<Icon />).toJSON();
		expect(json).toMatchSnapshot();
	});

	it("onClick", () => {
		const fn = jest.fn();
		const component = mount(<Icon name="disable" onClick={fn} />);
		component.find("svg").simulate("click");
		expect(fn).toBeCalled();
	});
});
