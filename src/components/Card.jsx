import React from "react";
import Image from "next/legacy/image";

function Card(props) {
  return (
    <div className="card">
      <img src={props.item.img} alt="item-image" width={100} height={100} />
      <div className="cardText">
        <h2 className="cardTitle">{props.item.title}</h2>
        <p className="cardDesc">{props.item.desc}</p>
      </div>
      <div className="cardInfo">
        <img src={props.item.profile[0]} />
        <span className="cardTitle">{props.item.profile[1]}</span>
        <span className="cardDesc">{props.item.profile[2]}</span>
      </div>
    </div>
  );
}

export default Card;
