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
}

const Scroll: React.FunctionComponent<Props> = (props) => {
	const { ...rest } = props;
	const [barHeight, setBarHeight] = useState(0);
	const [barTop, _setBarTop] = useState(0);
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
						transform: `translateY(${barTop}px)`,
					}}
					onMouseDown={onMouseDown}
				></div>
			</div>
		</div>
	);
};

export default Scroll;
