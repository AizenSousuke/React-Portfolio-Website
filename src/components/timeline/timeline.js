import React from "react";
import TimelineCard from "./timeline-card";

function Timeline(props) {
	return (
		<>
			<div className="timeline">
				<header className="timeline-header">
					<span className="tag is-medium is-danger">Current</span>
				</header>
				{props.data
					.map((timeline, index) => {
						return <TimelineCard data={timeline} key={index} />;
					})
					.reverse()}
				<div className="timeline-header">
					<span className="tag is-medium is-danger">Past</span>
				</div>
			</div>
			<div className="column"></div>
		</>
	);
}

export default Timeline;
