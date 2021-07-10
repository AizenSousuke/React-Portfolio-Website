import React, { Component } from "react";
// import PropTypes from 'prop-types'
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";
import NavButton from "../../components/buttons/navbutton.js";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFetching: true,
			data: {},
		};
	}

	componentDidMount() {
		this.Init();
	}

	Init() {
		if (this.state.isFetching) {
			this.setState({ data: Data }, () => {
				// console.log("Data is fetched.");
				this.setState({ isFetching: false });
			});
		}
	}

	render() {
		if (this.state.isFetching) {
			return "Not loaded yet";
		}

		return (
			<>
				<div className="container is-fluid">
					<div className="hero">
						<div className="hero is-large">
							<div className="hero-body">
								<div className="container">
									<motion.div
										initial={{
											rotate: -40,
											opacity: 0,
											x: 200,
										}}
										animate={{
											rotate: -3,
											opacity: 1,
											x: 0,
										}}
										transition={{
											type: "spring",
											damping: 7,
											velocity: 2,
											duration: 0.5,
										}}
									>
										<div className="title is-size-1 has-text-weight-bold has-text-right">
											{this.state.data.title}
										</div>
									</motion.div>
									<br />
									<br />
									<motion.div
										initial={{
											rotate: 40,
											opacity: 0,
											x: -200,
										}}
										animate={{
											rotate: 0,
											opacity: 1,
											x: 0,
										}}
										transition={{
											type: "spring",
											damping: 7,
											velocity: 1,
											duration: 0.5,
										}}
									>
										<div className="subtitle is-size-4 has-text-justified">
											{this.state.data.subtitle}
										</div>
									</motion.div>
									<br></br>
									<motion.div
										initial={{
											rotateZ: -360,
											opacity: 0,
											y: 200,
										}}
										animate={{
											rotateZ: 0,
											opacity: 1,
											y: 0,
										}}
										transition={{
											type: "spring",
											damping: 7,
											velocity: 2,
											duration: 0.3,
										}}
										whileHover={{
											scale: 1.1,
										}}
									>
										<NavButton
											buttonName={
												this.state.data.subtitle_button
											}
											buttonStyle="is-dark is-large"
											buttonAlign="is-centered"
											buttonLink="/about"
											animate=""
										/>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Home;
