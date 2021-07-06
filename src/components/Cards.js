import React, { useState } from "react";

import "../styles/cards.css";

function Cards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://cdn.vox-cdn.com/thumbor/yyCaMGhPwmDIzzA4y56mR-l3BMk=/0x0:4000x2840/1200x800/filters:focal(1680x1100:2320x1740)/cdn.vox-cdn.com/uploads/chorus_image/image/69542575/1229901940.0.jpg",
    },
    {
      name: "Ketty Perry",
      url: "https://media.vanityfair.com/photos/55b6a35a9e9755183d97a183/3:2/w_900,h_600,c_limit/katy-perry-presidency.jpg",
    },
  ]);

  return (
    <div className="cards">
      <div className="cards__container">
        {people.map((person, id) => {
          return <p key={id}>{person.name}</p>;
        })}
      </div>
    </div>
  );
}

export default Cards;
