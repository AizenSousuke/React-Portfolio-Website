import React, { Component } from "react";
import "../../index";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";
import ProgressBar from "../../components/progressbar/progress";
import Cards from "../../components/cards/cards";
import ProfileCard from "../../components/cards/profile-card";
import { InView } from "react-intersection-observer";

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
		rotate: -5,
	},
	hover: {
		scale: 1.3,
		zIndex: 2,
		rotate: 5,
		transition: {
			duration: 0.25,
			type: "tween",
			ease: "circOut",
		},
	},
	tap: {
		scale: 1.4,
		zIndex: 2,
		rotate: 5,
		transition: {
			duration: 0.25,
			type: "tween",
			ease: "circOut",
		},
	},
	hidden: {
		x: -200,
		opacity: 0,
		transition: {
			delay: 0.5
		},
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.5
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
					class="container box margin-top"
					initial="hidden"
					animate="visible"
					variants={list}
				>
					<div class="columns margin-top">
						<div class="column is-one-third">
							<InView
								triggerOnce={true}
							>
								{({inView, ref}) => (
									<div
										ref={ref}
									>
										<motion.div
											initial="hidden"
											variants={list}
											animate={`${inView ? "visible" : "hidden"}`}
										>
											<ProfileCard data={this.state.data} />
										</motion.div>
									</div>
								)}
							</InView>
						</div>
						<div class="column is-two-thirds">
							<h2 class="title has-text-dark"> Expertise </h2>
							<div class="columns is-multiline">
								{this.state.data.about.expertise.map((item) => (
									<InView
									triggerOnce={false}
								>
									{({inView, ref}) => (
										<div
											class="column is-half-tablet is-one-third-desktop"
											ref={ref}
										>
											{/* Every 3 items, make a row */}
											<motion.div
												variants={imageAnim}
												initial="normal"
												animate={`${inView ? "visible" : "hidden"}`}
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
					<div class="columns is-one-third">
						<div class="column has-text-justified">
							<h2 class="title has-text-dark"> Summary </h2>
							{/* Could make this a component */}
							<h2 class="subtitle has-text-dark">
								{this.state.data.about.summary}
							</h2>
						</div>
						<div class="column is-two-thirds">
							<h2 class="title has-text-dark"> Skills </h2>
							{/* Could make this a component */}
							{this.state.data.about.skills.map((item) => (
								<>
									<div class="column">
										<p class="has-text-black subtitle">
											<i class={`${ item.icon }`}></i>{" "}
											{item.title}
										</p>
										<ProgressBar
											width={100}
											percent={item.proficiency}
										/>
									</div>
								</>
							))}
						</div>
					</div>
				</motion.div>
			);
		}
	}
}

export default AboutMe;
