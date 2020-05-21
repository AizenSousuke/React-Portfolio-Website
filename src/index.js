import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./index.css";
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import Social from "./pages/social/Social";
import Navbar from "./components/navbar/navbar";
import AboutMe from "./pages/about-me/AboutMe";
import ParticlesBg from "particles-bg";

const config = {
	num: [0.01],
	v: [1],
	scale: [1],
	alpha: [0.5, 0],
}

function Portfolio() {
	return (
		<>
			<Router>
				<Navbar />
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
				<Switch>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/about">
						<AboutMe />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Social />
				<ParticlesBg 
					bg={true}
					type={"cobweb"}
					color={"#8bc2ff"}
					config={config}
				/>
			</Router>
		</>
	);
}

ReactDOM.render(<Portfolio />, document.querySelector("#root"));
