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
		},
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.25,
			duration: 1,
		},
	},
	hover: {
		y: -5,
		transition: {
			type: "tween",
			ease: [0.4, 0.85, 0.9, 1],
			duration: 0.1,
		},
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
			<InView triggerOnce={false}>
				{({ inView, ref }) => (
					<div ref={ref}>
						<motion.div
							variants={anim}
							initial="hidden"
							animate={`${inView ? "visible" : "hidden"}`}
							whileHover="hover"
						>
							<span>
								<div>
									<progress
										className="progress is-info"
										value={percent}
										max={width}
										// style={{ width: `${value}%` }}
									></progress>
								</div>
								<div className="has-text-right">{percent}</div>
							</span>
						</motion.div>
					</div>
				)}
			</InView>
		</div>
	);
};
export default ProgressBar;
