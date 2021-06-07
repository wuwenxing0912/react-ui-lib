function classes(...name: (string | undefined)[]) {
	return name.filter(Boolean).join(" ");
}

export default classes;

function componentClassMaker(pre: string) {
	return function (name?: string) {
		return [pre, name].filter(Boolean).join("-");
	};
}

export { componentClassMaker };
