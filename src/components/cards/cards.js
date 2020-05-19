import React from "react";

export default function Cards(props) {
	return (
		<div className="card" style={{ borderRadius: 10 }}>
			<div className="card-header"></div>
			<img
				className="card-image"
				src={props.card.imageLink ?? ""}
				alt={props.card.title ?? ""}
			/>
			<div className="card-content">
				{props.card.location && (
					<div className="has-text-weight-bold">School</div>
				)}
				<h2 className="has-text-black">{props.card.title ?? ""}</h2>
				<p className="">{props.card.description ?? ""}</p>
				{props.card.location && (
					<>
						<div className="has-text-weight-bold">Location</div>
						{props.card.location}
						<div className="has-text-weight-bold">
							Professional Certifications
						</div>
						{props.card.professionalcert}
					</>
				)}
			</div>
		</div>
	);
}
