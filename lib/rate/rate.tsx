import React, { MouseEventHandler, useState } from "react";
import Icon from "../icon/icon";
import classes from "../helpers/classes";
import "./rate.scss";

interface Props {
	count?: number;
	className?: string;
	style?: React.CSSProperties;
	defaultValue?: number;
	value?: number;
}

const Rate: React.FunctionComponent<Props> = (props) => {
	const { count, className, ...rest } = props;
	const defaultValue = props.defaultValue || props.value || 0;
	const value = props.value || defaultValue;
	const [defaultStarCount, setDefaultStarCount] = useState(defaultValue);
	const [starCount, setStarCount] = useState(value);
	const hoverEnter: MouseEventHandler = (e) => {
		e.currentTarget.parentNode?.childNodes.forEach((child, index) => {
			if (e.currentTarget === child) {
				setDefaultStarCount(index + 1);
				return;
			}
		});
	};
	const hoverLeave: MouseEventHandler = (e) => {
		setDefaultStarCount(starCount);
	};
	const onClick: MouseEventHandler = (e) => {
		e.currentTarget.parentNode?.childNodes.forEach((child, index) => {
			if (e.currentTarget === child) {
				setStarCount(index + 1);
				setDefaultStarCount(index + 1);
				return;
			}
		});
	};

	return (
		<ul
			className={classes("x-rate-wrapper", className)}
			onMouseLeave={hoverLeave}
			{...rest}
		>
			{[...Array(defaultStarCount)].map((val, index) => (
				<li
					className="x-rate-star"
					onMouseEnter={hoverEnter}
					onClick={onClick}
					key={index}
				>
					<Icon name="star" className="x-star-icon defaul-value"></Icon>
				</li>
			))}
			{[...Array(count! - defaultStarCount)].map((val, index) => (
				<li className="x-rate-star" onMouseEnter={hoverEnter} key={index}>
					<Icon name="star" className="x-star-icon"></Icon>
				</li>
			))}
		</ul>
	);
};

Rate.defaultProps = {
	count: 5,
};

export default Rate;
