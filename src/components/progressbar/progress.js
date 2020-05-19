import * as React from "react";
import "../../../src/index";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const anim = {
	hidden: {
		y: -50,
		opacity: 0,
		transition: {
			delay: 0.25,
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.25,
		}
	},
};

export var ProgressBar = ({ width, percent }) => {
	const [value, setValue] = React.useState(0);

	React.useEffect(() => {
		setValue((percent * width) / 100);
	}, [percent, width]);

	return (
		<div>
			{/* <div className="progress-div" style={{ width: `${width}%` }}>
				<div style={{ width: `${value}%` }} className="progress" />
			</div> */}
			<InView
				triggerOnce={false}
			>
				{({inView, ref}) => (
					<div
						ref={ref}
					>
						<motion.div 
							variants={anim}
							initial="hidden"
							animate={`${inView ? "visible" : "hidden"}`}
						>
							<progress
								className="progress is-primary"
								value={width}
								max={width}
								style={{ width: `${value}%` }}
							>
								15%
							</progress>
						</motion.div>
					</div>
				)}
			</InView>
		</div>
	);
};
export default ProgressBar;
