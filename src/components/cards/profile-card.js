import React from "react";

export default function ProfileCard(props) {
    console.log(props);
	return (
		<div class="card">
			<figure class="image is-fullwidth">
				<img
					class=""
					src={props.data.about.profile_picture}
					alt="profile-pic"
				/>
			</figure>
			<div class="card-content">
				<h2 class="has-text-weight-bold title">
					{props.data.name}
				</h2>
				<h3 class="subtitle">{props.data.about.job_title}</h3>
				<div class="buttons">
					<a
						class="button is-outlined is-rounded is-fullwidth"
						href={`${"tel:" + props.data.contact}`}
					>
						<span class="icon is-small">
							<i class="fa fa-phone" aria-hidden="true"></i>
						</span>
						<span>Call Me</span>
					</a>
					<a
						class="button is-black is-rounded is-fullwidth"
						href={`${"mailto:" + props.data.email}`}
					>
						<span class="icon is-small">
							<i
								class="fa fa-envelope-open"
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
