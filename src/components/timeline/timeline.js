import React from "react";
import TimelineCard from "./timeline-card";

function Timeline(props) {
	return (
		<>
			<div className="timeline">
				<header className="timeline-header">
					<span className="tag is-medium is-danger">Current</span>
				</header>
				<TimelineCard data={props.data[5]} />
				<header className="timeline-header">
					<span className="tag is-medium is-warning">2019 - 2020</span>
				</header>
				<TimelineCard data={props.data[4]} />
				<header className="timeline-header">
					<span className="tag is-medium is-warning">2018 - 2019</span>
				</header>
				<TimelineCard data={props.data[3]} />
				<header className="timeline-header">
					<span className="tag is-medium is-warning">2015 - 2017</span>
				</header>
				<TimelineCard data={props.data[2]} />
				<header className="timeline-header">
					<span className="tag is-medium is-warning">2014 - 2015</span>
				</header>
				<TimelineCard data={props.data[1]} />
				<header className="timeline-header">
					<span className="tag is-medium is-warning">2009 - 2012</span>
				</header>
				<TimelineCard data={props.data[0]} />
				<div className="timeline-header">
					<span className="tag is-medium is-danger">Past</span>
				</div>
			</div>
			<div className="column"></div>
		</>
	);
}

export default Timeline;
