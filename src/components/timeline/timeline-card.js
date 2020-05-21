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
						<div className="column">{props.data.header ?? "header"}</div>
						<div className="column tag is-link has-text-weight-bold">{props.data.subtitle ?? "subtitle"}</div>
					</div>
					<div className="message-body">
						<p>{props.data.jobscope ?? ""}</p>
						<div className="is-size-7">
							{props.data.content ??
								"Ex anim do id aute aute. Quis anim aliqua eu eiusmod occaecat. Consectetur reprehenderit do commodo do. Occaecat eu magna in deserunt. Qui in aliquip ipsum consequat ipsum ea reprehenderit."}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TimelineCard;
