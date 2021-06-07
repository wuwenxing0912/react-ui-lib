import React, { useState } from "react";
import Dialog from "./dialog";

const DialogHome: React.FunctionComponent = () => {
	const [visible, setVisible] = useState(false);
	const [x, y] = useState(false);
	return (
		<div>
			<div>
				<button onClick={() => y(!x)}>click</button>
				<Dialog
					visible={x}
					buttons={[
						<button onClick={() => y(!x)}>取消</button>,
						<button onClick={() => y(!x)}>确定</button>,
					]}
					onClose={() => y(!x)}
					onClickMaskClose={true}
				>
					<div>弹出框</div>
				</Dialog>
			</div>


			<div style={{ position: "relative", zIndex: 10 }}>
				<button onClick={() => setVisible(!visible)}>click</button>
				<Dialog
					visible={visible}
					buttons={[
						<button onClick={() => setVisible(!visible)}>取消</button>,
						<button onClick={() => setVisible(!visible)}>确定</button>,
					]}
					onClose={() => setVisible(!visible)}
					onClickMaskClose={true}
				>
					<div>弹出框</div>
				</Dialog>
			</div>
		</div>
	);
};

export default DialogHome;
