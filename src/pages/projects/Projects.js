import React, { Component } from "react";
import NavButton from "../../components/buttons/navbutton.js";
import ProjectTile from "../../components/project-tile/project-tile.js";
import Data from "../../components/data/data.json";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const list = {
	hidden: {
		y: 300,
		opacity: 0,
		transition: {
			delay: 0.25,
			type: "tween",
			ease: "easeInOut",
		},
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.25,
			type: "tween",
			ease: "easeInOut",
			duration: 0.5,
		},
	},
};

class Projects extends Component {
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
		}

		return (
			<div className="container is-fluid">
				<div className="columns">
					<div className="column"></div>
					<div className="column is-one-third-desktop is-three-quarters-tablet">
						<div className="hero-body title is-1 has-text-centered is-uppercase">
							Projects
						</div>
						<div className="tile is-ancestor is-vertical">
							{this.state.data.projects.map((obj) => {
								return (
									<InView
										key={obj.id}
										triggerOnce={false}
										threshold={0.25}
									>
										{({ inView, ref }) => (
											<div ref={ref}>
												<motion.div
													className="tile is-parent"
													variants={list}
													initial="hidden"
													animate={`${
														inView
															? "visible"
															: "hidden"
													}`}
												>
													<ProjectTile
														key={obj.id}
														imageLink={
															obj.imageLink
														}
														imageStyle={""}
														title={obj.name}
														subtitle={
															obj.description
														}
														link={obj.link}
													/>
												</motion.div>
											</div>
										)}
									</InView>
								);
							})}
						</div>
						<NavButton
							buttonAlign="is-centered"
							buttonStyle="is-primary is-rounded is-fullwidth"
						/>
					</div>
					<div className="column"></div>
				</div>
			</div>
		);
	}
}

export default Projects;
