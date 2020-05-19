import React from "react";

export default function Cards(props) {
	return (
		<div class="card" style={{ borderRadius: 10 }}>
			<div class="card-header"></div>
			<img
				class="card-image"
				src={props.card.imageLink ?? ""}
				alt={props.card.title}
			/>
			<div class="card-content">
				<h2 class="has-text-black">{props.card.title}</h2>
				<p class="">{props.card.description}</p>
			</div>
		</div>
	);
}
