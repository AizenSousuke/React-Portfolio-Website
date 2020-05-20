import React, { Component } from "react";
import "../../index";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";
import ProgressBar from "../../components/progressbar/progress";
import Cards from "../../components/cards/cards";
import ProfileCard from "../../components/cards/profile-card";
import { InView } from "react-intersection-observer";
import NavButton from "../../components/buttons/navbutton.js";

const list = {
	hidden: {
		x: -200,
		opacity: 0,
		transition: {
			when: "afterChildren",
		},
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.25,
		},
	},
};

const imageAnim = {
	normal: {
		scale: 1,
		zIndex: 1,
		rotate: -3,
	},
	hover: {
		scale: 1.1,
		zIndex: 2,
		rotate: 3,
		transition: {
			duration: 0.25,
			type: "tween",
			ease: "circOut",
		},
	},
	tap: {
		scale: 1.1,
		zIndex: 2,
		rotate: 3,
		transition: {
			duration: 0.25,
			type: "tween",
			ease: "circOut",
		},
	},
	hidden: {
		x: -100,
		opacity: 0,
		transition: {
			delay: 0.25,
		},
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.25,
		},
	},
};

class AboutMe extends Component {
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
				this.setState({ isFetching: false });
				// console.log("Data is fetched.");
				// console.log(this.state.data);
			});
		}
	}
	render() {
		if (this.state.isFetching) {
			return "Not loaded yet";
		} else {
			return (
				<motion.div
					className="container is-fluid"
					initial="hidden"
					animate="visible"
					variants={list}
					style={{ marginTop: 20 }}
				>
					<div className="columns">
						<div className="column is-one-third">
							<InView triggerOnce={true}>
								{({ inView, ref }) => (
									<div ref={ref}>
										<motion.div
											initial="hidden"
											variants={list}
											animate={`${
												inView ? "visible" : "hidden"
											}`}
										>
											<ProfileCard
												data={this.state.data}
											/>
										</motion.div>
										<motion.div
											initial="hidden"
											variants={list}
											animate={`${
												inView ? "visible" : "hidden"
											}`}
										>
											<article className="message">
												<h2 className="message-header">
													{" "}
													Summary{" "}
												</h2>
												<h2 className="message-body">
													{
														this.state.data.about
															.summary
													}
												</h2>
											</article>
										</motion.div>
									</div>
								)}
							</InView>
						</div>
						<div className="column is-two-thirds">
							<h2 className="title has-text-dark"> Expertise </h2>
							<div className="columns is-multiline">
								{this.state.data.about.expertise.map((item) => (
									<InView
										key={item.id}
										triggerOnce={false}
										threshold={0.25}
									>
										{({ inView, ref }) => (
											<div
												className="column is-half-tablet is-one-third-desktop"
												ref={ref}
											>
												{/* Every 3 items, make a row */}
												<motion.div
													variants={imageAnim}
													initial="normal"
													animate={`${
														inView
															? "visible"
															: "hidden"
													}`}
													whileHover="hover"
												>
													<Cards card={item} />
												</motion.div>
											</div>
										)}
									</InView>
								))}
							</div>
						</div>
					</div>
					<div className="columns is-one-third">
						<div className="column has-text-justified">
							<h2 className="title"> Education </h2>
							<Cards
								className="message-body"
								card={this.state.data.about.education}
							/>
						</div>
						<div className="column is-two-thirds">
							<h2 className="title has-text-dark"> Skills </h2>
							{this.state.data.about.skills.map((item) => (
								<div key={item.id} className="column">
									<p className="has-text-black subtitle">
										<i className={`${item.icon}`}></i>{" "}
										{item.title}
									</p>
									<ProgressBar
										width={100}
										percent={item.proficiency}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="column">
						<NavButton
							buttonAlign="is-centered"
							buttonStyle="is-primary is-rounded"
							buttonLink="/projects"
							buttonName="See My Projects"
						/>
					</div>
				</motion.div>
			);
		}
	}
}

export default AboutMe;
