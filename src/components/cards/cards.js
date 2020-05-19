import React from "react";

export default function Cards(props) {
	return (
		<div className="card" style={{ borderRadius: 10 }}>
			<div className="card-header"></div>
			<img
				className="card-image"
				src={props.card.imageLink ?? ""}
				alt={props.card.title}
			/>
			<div className="card-content">
				<h2 className="has-text-black">{props.card.title}</h2>
				<p className="">{props.card.description}</p>
			</div>
		</div>
	);
}
