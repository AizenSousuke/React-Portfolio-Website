import React from "react";
import Image, { Shimmer } from "react-shimmer";
import ContainerDimensions from "react-container-dimensions";
import { SRLWrapper } from "simple-react-lightbox";
import Button from "../buttons/button.js";

const ProjectTileAlternative = (props) => {
	return (
		<div className={`tile is-parent`}>
			<article className={`tile box is-parent is-${props.is ?? 3}`}>
				<div className="tile is-child content">
					<figure
						className={`image ${props.imageStyle ?? "is-16by9"}`}
					>
						<SRLWrapper>
							<Image
								src={require("../../images/" +
									props.imageLink +
									".png")}
								alt="button"
								fallback={
									<ContainerDimensions>
										{({ width, height }) => (
											<Shimmer
												width={width}
												height={
													height > 272 ? 272 : height
												}
											/>
										)}
									</ContainerDimensions>
								}
							/>
						</SRLWrapper>
					</figure>
					<div className="title">{props.title}</div>
					<div className="subtitle">{props.subtitle}</div>
					<div className="buttons">
						<Button
							buttonName="Check it out on Github"
							buttonStyle="button is-primary is-fullwidth"
							buttonLink={props.link}
						/>
					</div>
				</div>
			</article>
		</div>
	);
};

export default ProjectTileAlternative;
