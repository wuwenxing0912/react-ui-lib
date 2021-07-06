import React, {
	MouseEventHandler,
	UIEventHandler,
	useEffect,
	useRef,
	useState,
} from "react";
import classes from "../helpers/classes";
import scrollbarWidth from "./scroll-width";
import "./scroll.scss";

interface Props {
	style?: React.CSSProperties;
	className?: string;
	trackStyle?: React.CSSProperties;
	trackClassName?: string;
	barStyle?: React.CSSProperties;
	barClassName?: string;
}

const Scroll: React.FunctionComponent<Props> = (props) => {
	const {
		style,
		className,
		trackStyle,
		trackClassName,
		barStyle,
		barClassName,
		...rest
	} = props;
	const [barHeight, setBarHeight] = useState(0);
	const [barTop, _setBarTop] = useState(0);
	const [trackVisible, setTrackvisible] = useState(false);
	const setBarTop = (n: number) => {
		const scrollHeight = scrollInnerRef.current!.scrollHeight;
		const viewHeight = scrollInnerRef.current!.getBoundingClientRect().height;
		const maxBarTop = ((scrollHeight - viewHeight) * viewHeight) / scrollHeight;
		if (n < 0) {
			return;
		} else if (n > maxBarTop) {
			return;
		} else {
			_setBarTop(n);
		}
		if (scrollHeight > viewHeight) {
			setTrackvisible(true);
		}
	};
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
		if (scrollHeight > viewHeight) {
			setTrackvisible(true);
		}
	}, []);
	const draggingRef = useRef(false);
	const preClientYRef = useRef(0);
	const preBarTopRef = useRef(0);
	const onMouseDown: MouseEventHandler = (e) => {
		draggingRef.current = true;
		preClientYRef.current = e.clientY;
		preBarTopRef.current = barTop;
	};
	const onMouseMove = (e: MouseEvent) => {
		if (draggingRef.current) {
			const moveDistance = e.clientY - preClientYRef.current;
			const newBarTop = preBarTopRef.current + moveDistance;
			setBarTop(newBarTop);
			const scrollHeight = scrollInnerRef.current!.scrollHeight;
			const viewHeight = scrollInnerRef.current!.getBoundingClientRect().height;
			scrollInnerRef.current!.scrollTop =
				(newBarTop * scrollHeight) / viewHeight;
		}
	};
	const onMouseUP = () => {
		draggingRef.current = false;
	};
	const onSelect = (e: Event) => {
		if (draggingRef.current) {
			e.preventDefault();
		}
	};
	useEffect(() => {
		document.addEventListener("mouseup", onMouseUP);
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("selectstart", onSelect);
		return () => {
			document.removeEventListener("mouseup", onMouseUP);
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("selectstart", onSelect);
		};
	}, []);
	return (
		<div className={classes("x-scroll", className)} style={style} {...rest}>
			<div
				className="x-scroll-inner"
				style={{ right: -scrollbarWidth() }}
				ref={scrollInnerRef}
				onScroll={onScroll}
			>
				{props.children}
			</div>
			<div
				className={classes("x-scroll-track", trackClassName)}
				style={{ opacity: trackVisible ? 1 : 0, ...trackStyle }}
			>
				<div
					className={classes("x-scroll-bar", barClassName)}
					style={{
						height: `${barHeight}px`,
						transform: `translateY(${barTop}px)`,
						...barStyle,
					}}
					onMouseDown={onMouseDown}
				></div>
			</div>
		</div>
	);
};

export default Scroll;
