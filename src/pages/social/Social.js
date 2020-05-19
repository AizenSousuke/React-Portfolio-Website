import React, { Component } from "react";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";
import "./Social.scss";

class Social extends Component {
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
				<footer className="footer">
					<div className="container">
						<div className="content has-text-centered">
							<section className="hero is-dark">
								<div className="hero-body">
									<div className="container">
										<h1 className="title is-size-3 text-center">
											Follow me on: &nbsp;
											{/* <motion.a
												whileHover={{ scale: 1.5 }}
												whileTap={{ scale: 0.95 }}
												href={this.state.data.social[0].link ?? ""}
												className="has-text-light is-inline-block"
											>
												<i className="fab fa-instagram" />
											</motion.a>{" "}
											&nbsp;
											<motion.a
												whileHover={{ scale: 1.5 }}
												whileTap={{ scale: 0.95 }}
												href={this.state.data.social[1].link ?? ""}
												className="has-text-light is-inline-block"
											>
												<i className="fab fa-facebook-f"></i>
											</motion.a>{" "}
											&nbsp; */}
											<motion.a
												whileHover={{ scale: 1.5 }}
												whileTap={{ scale: 0.95 }}
												href={
													this.state.data.social[2]
														.link ?? ""
												}
												className="has-text-light is-inline-block"
											>
												<i className="fab fa-github"></i>
											</motion.a>
										</h1>
									</div>
								</div>
							</section>
						</div>
					</div>
				</footer>
			);
		}
	}
}
export default Social;
