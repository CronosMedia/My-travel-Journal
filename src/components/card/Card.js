import React from "react";
import "./card.css";

const Card = (props) => {
	return (
		<>
			{" "}
			<section className="card">
				<img
					src={`/img/${props.imageUrl}`}
					alt=""
					className="card-img"
				/>
				<div className="card-info">
					<div className="card-location">
						<div className="location">
							<img
								src="/img/pin-icon.png"
								alt=""
								className="pin-icon"
							/>
							<span className="country">{props.location}</span>
						</div>

						<a
							href={props.googleMapsUrl}
							target="_blank"
							className="maps-link"
							rel="noreferrer">
							View on Google Maps
						</a>
					</div>
					<h1 className="card-title">{props.title}</h1>
					<h4 className="card-date">
						{props.startDate} - {props.endDate}
					</h4>
					<p className="card-description">{props.description}</p>
				</div>
			</section>
			<hr />
		</>
	);
};

export default Card;
