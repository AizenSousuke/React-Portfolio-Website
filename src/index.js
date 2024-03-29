import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./index.css";
import Home from "./pages/home/Homepage";
import Projects from "./pages/projects/ProjectsPage";
import Social from "./pages/social/SocialPage";
import Navbar from "./components/navbar/navbar";
import AboutMe from "./pages/about-me/AboutMePage";
import Experiences from "./pages/experiences/Experiences";
import ScrollToTop from "./components/helper/ScrollToTop";
import SimpleReactLightbox from "simple-react-lightbox";

function Portfolio() {
	return (
		<>
			<SimpleReactLightbox>
				<Router>
					<ScrollToTop />
					<Navbar />
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
					<Switch>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/experiences">
							<Experiences />
						</Route>
						<Route path="/about">
							<AboutMe />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
					<Social />
				</Router>
			</SimpleReactLightbox>
		</>
	);
}

ReactDOM.render(<Portfolio />, document.querySelector("#root"));
