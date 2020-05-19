import React from "react";
import { motion } from "framer-motion";

const button = (props) => {
	return (
		<motion.a
			className={props.buttonStyle ?? "button is-primary"}
			style={{ textDecoration: "none" }}
			whileHover={{ scale: 1.01 }}
			whileTap={{ scale: 0.99 }}
			href={props.buttonLink ?? "/"}
		>
			<span className="icon is-small">
				<i className="fa fa-arrow-right" aria-hidden="true"></i>
			</span>
			<span>{props.buttonName ?? "Button"}</span>
		</motion.a>
	);
};

export default button;
