import React, { useEffect, useRef } from "react";
import classes from "../helpers/classes";
import "./slide.scss";

interface Props {
	className?: string;
	style?: React.CSSProperties;
}

const Slide: React.FunctionComponent<Props> = (props) => {
	const { children } = props;
	console.dir(children);
	const slideInnerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		inital(slideInnerRef.current!);
	}, []);

	return (
		<div className={classes("x-slide")}>
			<div className={classes("x-slide-inner")} ref={slideInnerRef}>
				{children}
			</div>
			<div className={classes("x-slide-dots-container")}>
				{React.Children.map(children, (child, index) => {
					return (
						<span
							key={index}
							className={classes(
								"x-slide-dots",
								(index === 1 && "active") || ""
							)}
						></span>
					);
				})}
			</div>
		</div>
	);
};

function inital(ref: HTMLDivElement) {
	const childrenLength = ref.childElementCount || 0;
	if (childrenLength > 1) {
		cloneNodes(ref, childrenLength);
		ref.childNodes.forEach((child: HTMLElement) => {
			child.classList.add("x-slide-inner-child");
		});
		const childWidth = (ref.childNodes[0] as HTMLElement).offsetWidth;
		ref.style.width = `${childWidth}px`;
		ref.style.transform = `translateX(-${childWidth}px)`;
	}
}
function cloneNodes(nodes: HTMLDivElement, length: number) {
	const cloneFirstElement = nodes.childNodes[0].cloneNode(true);
	const cloneLastElement = nodes.childNodes[length - 1].cloneNode(true);
	nodes.append(cloneFirstElement);
	nodes.prepend(cloneLastElement);
}

export default Slide;
