import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img9 from "../images/img-9.jpg";
import img6 from "../images/img-6.jpg";
import img4 from "../images/img-4.jpg";
import img3 from "../images/img-3.jpg";
import img8 from "../images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinatioon</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amzon Jungle"
              label="Adventure"
              path="/Services"
            />
            <CardItem
              img
              src={img6}
              text="  Travel through the Islands of Ball in a Private Cruise"
              label="Luxury"
              path="/Services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mastery"
              path="/Services"
            />
            <CardItem
              img
              src={img4}
              text="  Experience Football on Top of the Himilayan Mountainse"
              label="Adventure"
              path="/Products"
            />
            <CardItem
              img
              src={img8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
