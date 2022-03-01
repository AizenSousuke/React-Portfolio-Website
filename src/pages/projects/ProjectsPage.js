import React, { Component } from "react";
import NavButton from "../../components/buttons/navbutton.js";
import ProjectTile from "../../components/project-tile/project-tile.js";
import Data from "../../components/data/data.json";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ProjectTileAlternative from "../../components/project-tile/project-tile-alternative.js";

const list = {
	hidden: {
		y: 300,
		opacity: 0,
		transition: {
			delay: 0.25,
			type: "tween",
			ease: "easeInOut",
		},
		rotateX: -90,
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
		rotateX: 0,
	},
	hover: {
		y: -10,
		transition: {
			type: "tween",
			ease: [0.4, 0.85, 0.9, 1],
			duration: 0.1,
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
					<div className="columns">
						<div className="column"></div>
						<div className="column is-two-third-desktop">
							<div className="hero-body title is-1 has-text-centered is-uppercase">
								Projects
							</div>
							<div className="tile is-ancestor">
								{this.state.data.projects.map((obj, index) => {
									return (
										<ProjectTileAlternative
											key={obj.id}
											imageLink={obj.imageLink}
											imageStyle={""}
											title={obj.name}
											subtitle={
												obj.description
											}
											link={obj.link}
											is={index % 1}
										/>
									);
								})}
							</div>
							<div className="column">
								<NavButton
									buttonAlign="is-centered"
									buttonStyle="is-primary is-rounded is-fullwidth"
								/>
							</div>
						</div>
						<div className="column"></div>
					</div>
				</div>
			</>
		);
	}
}

export default Projects;
