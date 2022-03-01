import React from "react";

export default function ProfileCard(props) {
	return (
		<div className="card">
			<div className="card-content">
				<figure className="image">
					<img
						className=""
						src={require("../../images/" +
							props.data.about.profile_picture +
							".png")}
						alt="profile-pic"
					/>
				</figure>
				<h2 className="has-text-weight-bold title">
					{props.data.name}
				</h2>
				<h3 className="subtitle is-uppercase">
					{props.data.about.job_title}
				</h3>
				<div className="buttons">
					<a
						className="button is-outlined is-link is-rounded is-fullwidth"
						href={`${props.data.linkedin}`}
					>
						<span className="icon is-small">
							<i className="fab fa-linkedin" aria-hidden="true"></i>
						</span>
						<span>Connect on LinkedIn</span>
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
