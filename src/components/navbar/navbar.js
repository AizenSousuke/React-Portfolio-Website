import { motion } from "framer-motion";
import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav
			className="navbar is-primary is-fixed-top"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="navbar-brand">
				<span className="navbar-item">
					<motion.div whileHover={{ scale: 1.2 }}>
						<i className="fas fa-home"></i>
						<Link to="/" className="">
							Home
						</Link>
					</motion.div>
				</span>
				<span className="navbar-item">
					<motion.div whileHover={{ scale: 1.2 }}>
						<i className="fas fa-tasks"></i>
						<Link to="/projects" className="">
							Projects
						</Link>
					</motion.div>
				</span>
				<span className="navbar-item">
					<motion.div whileHover={{ scale: 1.2 }}>
						<i className="fas fa-history"></i>
						<Link to="/experiences" className="">
							Experiences
						</Link>
					</motion.div>
				</span>
				<span className="navbar-item">
					<motion.div whileHover={{ scale: 1.2 }}>
						<i className="fas fa-user-circle"></i>
						<Link to="/about" className="">
							About
						</Link>
					</motion.div>
				</span>
			</div>
		</nav>
	);
}
