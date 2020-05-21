import React from "react";

function TimelineCard(props) {
	return (
		<div className="timeline-item">
			<div className="timeline-marker is-icon">
				<i className="fa fa-flag"></i>
			</div>
			<div className="timeline-content">
				<p className="heading">{props.data.month ?? "May 2012"}</p>
				<div className="message is-info">
					<div className="message-header">
						<h3>{props.data.header ?? "header"}</h3>
					</div>
					<div className="message-body">
						{props.data.content ??
							"Ex anim do id aute aute. Quis anim aliqua eu eiusmod occaecat. Consectetur reprehenderit do commodo do. Occaecat eu magna in deserunt. Qui in aliquip ipsum consequat ipsum ea reprehenderit."}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TimelineCard;
