import React from "react";

export default function ProfileCard(props) {
	return (
		<div className="card">
			<figure className="image is-fullwidth">
				<img
					className=""
					src={props.data.about.profile_picture}
					alt="profile-pic"
				/>
			</figure>
			<div className="card-content">
				<h2 className="has-text-weight-bold title">
					{props.data.name}
				</h2>
				<h3 className="subtitle">{props.data.about.job_title}</h3>
				<div className="buttons">
					<a
						className="button is-outlined is-rounded is-fullwidth"
						href={`${"tel:" + props.data.contact}`}
					>
						<span className="icon is-small">
							<i className="fa fa-phone" aria-hidden="true"></i>
						</span>
						<span>Call Me</span>
					</a>
					<a
						className="button is-black is-rounded is-fullwidth"
						href={`${"mailto:" + props.data.email}`}
					>
						<span className="icon is-small">
							<i
								className="fa fa-envelope-open"
								aria-hidden="true"
							></i>
						</span>
						<span>Email Me</span>
					</a>
				</div>
			</div>
		</div>
	);
}