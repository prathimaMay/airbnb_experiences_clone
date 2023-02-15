import React from "react";
// import cardImage from "../images/card_section_img.png";
// import starImg from "../public/images";

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`/images/${props.coverImg}`}
        alt="card image"
        className="card-img"
      ></img>
      <div className="card-stats">
        <img
          src="/images/Star1.png"
          alt="star image"
          className="star-img"
        ></img>
        <span>{props.stats.rating}</span>
        <span className="grey-text">({props.stats.reviewCount}) . </span>
        <span className="grey-text">{props.location}</span>
      </div>
      <p className="card-text">{props.title}</p>
      <p className="card-price">
        <span className="price">From ${props.price}</span> / person
      </p>
    </div>
  );
}
