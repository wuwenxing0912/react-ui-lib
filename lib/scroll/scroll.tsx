import React, { UIEventHandler, useEffect, useRef, useState } from "react";
import classes from "../helpers/classes";
import scrollbarWidth from "./scroll-width";
import "./scroll.scss";

interface Props {
	style?: React.CSSProperties;
}

const Scroll: React.FunctionComponent<Props> = (props) => {
	const { ...rest } = props;
	const [barHeight, setBarHeight] = useState(0);
	const [barTop, setBarTop] = useState(0);
	const onScroll: UIEventHandler = (e) => {
		const scrollHeight = scrollInnerRef.current!.scrollHeight;
		const viewHeight = scrollInnerRef.current!.getBoundingClientRect().height;
		const scrollTop = scrollInnerRef.current!.scrollTop;
		setBarTop((scrollTop * viewHeight) / scrollHeight);
	};

	const scrollInnerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const scrollHeight = scrollInnerRef.current!.scrollHeight;
		const viewHeight = scrollInnerRef.current!.getBoundingClientRect().height;
		setBarHeight((viewHeight * viewHeight) / scrollHeight);
	}, []);
	return (
		<div className={classes("x-scroll")} {...rest}>
			<div
				className="x-scroll-inner"
				style={{ right: -scrollbarWidth() }}
				ref={scrollInnerRef}
				onScroll={onScroll}
			>
				{props.children}
			</div>
			<div className="x-scroll-track">
				<div
					className="x-scroll-bar"
					style={{
						height: `${barHeight}px`,
						transform: `translateY(${barTop}px)`
					}}
				></div>
			</div>
		</div>
	);
};

export default Scroll;
