import React from "react";

function TimelineCard({ data }) {
	return (
		<div className="timeline-item is-danger">
			<div className="timeline-marker is-icon is-danger">
				<i className="fa fa-flag"></i>
			</div>
			<div
				className="timeline-content fullwidth"
				style={{ minWidth: 500 }}
			>
				<p className="heading">{data.month ?? "May 2012"}</p>
				<div className="message is-info">
					<div className="message-header">
						<div className="column title is-5">
							{data.header ?? "header"}
						</div>
						<div className="column tag is-link has-text-weight-bold">
							{data.subtitle ?? "subtitle"}
						</div>
					</div>
					<div className="message-body">
						<div className="subtitle">
							{data.jobscope ?? "jobscope"}
						</div>
						<div className="is-italic is-size-6">
							{data.jobscope_advanced ?? null}
						</div>
						<div className="is-size-7" style={{marginTop: 10}}>
							{data.content ??
								"Ex anim do id aute aute. Quis anim aliqua eu eiusmod occaecat. Consectetur reprehenderit do commodo do. Occaecat eu magna in deserunt. Qui in aliquip ipsum consequat ipsum ea reprehenderit."}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TimelineCard;
