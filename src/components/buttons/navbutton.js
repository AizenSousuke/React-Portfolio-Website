import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavButton = (props) => {
	return (
		<motion.div
			className={`buttons ${props.buttonAlign ?? ""}`}
			whileHover={ props.animate ?? { scale: 1.05 } }
			whileTap={ props.animate ?? { scale: 0.95 } }
		>
			<Link
				to={`${props.buttonLink ?? "/"}`}
				className={`button ${props.buttonStyle ?? "is-primary is-rounded"}`}
				style={{ textDecoration: "none" }}
			>
				{props.buttonName ?? "Return to home page"}
			</Link>
		</motion.div>
	);
};

export default NavButton;
