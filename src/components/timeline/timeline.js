import React from "react";
import TimelineCard from "./timeline-card";

function Timeline(props) {
	return (
		<>
			<div className="timeline">
				<header className="timeline-header">
					<span className="tag is-medium is-danger">Current</span>
				</header>
				<div className="timeline-item">
					<div className="timeline-marker"></div>
					<div className="timeline-content">
						<p className="heading">January 2016</p>
						<p>Timeline content - Can include any HTML element</p>
					</div>
				</div>
				<TimelineCard data={props.data[1]} />
				<header className="timeline-header">
					<span className="tag is-medium is-warning">2012</span>
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
