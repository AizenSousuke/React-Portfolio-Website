import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<nav
				className="navbar is-dark is-fixed-top"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="navbar-brand">
					<span className="navbar-item">
						<i className="fas fa-home"></i> &nbsp;
						<Link to="/" className="has-text-white">
							Home
						</Link>
					</span>
					<span className="navbar-item">
						<i className="fas fa-tasks"></i> &nbsp;
						<Link to="/projects" className="has-text-white">
							Projects
						</Link>
					</span>
					<span className="navbar-item">
						<i className="fas fa-user-circle"></i> &nbsp;
						<Link to="/about" className="has-text-white">
							About
						</Link>
					</span>
				</div>
			</nav>
		</>
	);
}
