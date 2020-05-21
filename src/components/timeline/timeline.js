import React from "react";
import TimelineCard from "./timeline-card";

function Timeline(props) {
	return (
		<>
			<div className="timeline is-centered">
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
				<div className="timeline-item">
					<div className="timeline-marker is-image is-32x32">
						<img
							src="https://bulma.io/images/placeholders/32x32.png"
							alt=""
						/>
					</div>
					<div className="timeline-content">
						<p className="heading">February 2016</p>
						<p>Timeline content - Can include any HTML element</p>
					</div>
				</div>
				<header className="timeline-header">
					<span className="tag is-medium is-warning">2017</span>
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
