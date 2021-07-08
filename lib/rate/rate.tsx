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
	disabled?: boolean;
}

const Rate: React.FunctionComponent<Props> = (props) => {
	const { count, className, ...rest } = props;
	const defaultValue = props.defaultValue || props.value || 0;
	const value = props.value || defaultValue;
	const [defaultStarCount, setDefaultStarCount] = useState(defaultValue);
	const [starCount, setStarCount] = useState(value);
	const disabled = props.disabled ? "disabled" : undefined;
	const hoverEnter: MouseEventHandler = (e) => {
		if (disabled) {
			return;
		} else {
			e.currentTarget.parentNode?.childNodes.forEach((child, index) => {
				if (e.currentTarget === child) {
					setDefaultStarCount(index + 1);
					return;
				}
			});
		}
	};
	const hoverLeave: MouseEventHandler = (e) => {
		if (disabled) {
			return;
		} else {
			setDefaultStarCount(starCount);
		}
	};
	const onClick: MouseEventHandler = (e) => {
		if (disabled) {
			return;
		} else {
			e.currentTarget.parentNode?.childNodes.forEach((child, index) => {
				if (e.currentTarget === child) {
					setStarCount(index + 1);
					setDefaultStarCount(index + 1);
					return;
				}
			});
		}
	};

	return (
		<ul
			className={classes("x-rate-wrapper", className)}
			onMouseLeave={hoverLeave}
			{...rest}
		>
			{[...Array(defaultStarCount)].map((val, index) => (
				<li
					className={classes("x-rate-star", disabled)}
					onMouseEnter={hoverEnter}
					onClick={onClick}
					key={index}
				>
					<Icon name="star" className="x-star-icon defaul-value"></Icon>
				</li>
			))}
			{[...Array(count! - defaultStarCount)].map((val, index) => (
				<li
					className={classes("x-rate-star", disabled)}
					onMouseEnter={hoverEnter}
					key={index}
				>
					<Icon name="star" className={classes("x-star-icon", disabled)}></Icon>
				</li>
			))}
		</ul>
	);
};

Rate.defaultProps = {
	count: 5,
	disabled: false,
};

export default Rate;
