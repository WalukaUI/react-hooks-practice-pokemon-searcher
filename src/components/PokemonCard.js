import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokedata}) {
  const [front,setFront]=useState(null)

  function handleImage(){
    setFront(!front)
  }
  const { id,name, hp, sprites } = pokedata;
  return (
    <Card>
      <div key={id}>
        <div className="image" onClick={(e)=>handleImage(e)}>
          <img alt="oh no!" src={front?sprites.front:sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
