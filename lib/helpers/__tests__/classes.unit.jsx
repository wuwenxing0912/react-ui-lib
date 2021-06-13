import classes, { componentClassMaker } from "../classes";

describe("classes", () => {
	it("接受1个 className", () => {
		const className = classes("a");
		expect(className).toEqual("a");
	});

	it("接收2个 className", () => {
		const className = classes("a", "b");
		expect(className).toEqual("a b");
	});

	it("接收 undefined", () => {
		const className = classes("a", undefined);
		expect(className).toEqual("a");
	});

	it("不接收参数", () => {
		const className = classes();
		expect(className).toEqual("");
	});
});

describe("componentClassMaker", () => {
	it("接受字符串或对象", () => {
		const cc = componentClassMaker("x-layout");
		expect(cc("")).toEqual("x-layout");
		expect(cc("hasAside")).toEqual("x-layout-hasAside");
		expect(cc({ a: true, b: false })).toEqual("x-layout-a");
		expect(cc({ a: true, b: true })).toEqual("x-layout-a x-layout-b");
		expect(cc({ a: true, b: true }, { extra: "hi" })).toEqual("x-layout-a x-layout-b hi");
	});
});
