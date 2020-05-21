import React, { Component } from "react";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";

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

export default class Experiences extends Component {
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
						<div className="column">
							<div className="title is-1 has-text-centered is-uppercase">
								Experiences
							</div>
						</div>
					</div>
				</motion.div>
			);
		}
	}
}
