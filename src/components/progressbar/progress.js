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
	return (
		<div>
			<InView triggerOnce={true}>
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
