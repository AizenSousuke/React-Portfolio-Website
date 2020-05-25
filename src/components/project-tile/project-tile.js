import React from "react";
import Button from "../buttons/button.js";
import Image, { Shimmer } from "react-shimmer";
import ContainerDimensions from 'react-container-dimensions';

const ProjectTile = (props) => {
	return (
		<article className={`tile is-parent ${props.tileSize ?? ""}`}>
			<article className="tile is-child box">
				<figure className={`image ${props.imageStyle ?? "is-16by9"}`}>
					{/* <img
						src={`${
							props.imageLink ??
							"http://loremflickr.com/480/272/default"
						}`}
						alt="button"
					/> */}
							<Image
								src={`${
									props.imageLink ??
									"http://loremflickr.com/480/272/default"
								}`}
								alt="button"
								fallback={
									<ContainerDimensions>
										{({width, height}) => 
											//<Shimmer width={width} height={height} />
											<Shimmer width={width > 480 ? 480 : width} height={height > 272 ? 272 : height} />
										}
									</ContainerDimensions>}
							/>
				</figure>
				<h1 className="title">{props.title ?? "Title"}</h1>
				<h2 className="subtitle">{props.subtitle ?? "Subtitle"}</h2>
				<div className="buttons">
					<Button
						buttonName="Check it out on Github"
						buttonStyle="button is-primary is-fullwidth"
						buttonLink={props.link}
					/>
				</div>
			</article>
		</article>
	);
};

export default ProjectTile;
