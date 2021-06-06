import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokmansData}) {
   const populateCards=pokmansData.map((e)=> {
   return <PokemonCard pokedata={e} key={e.id}/>})
  return (
    <Card.Group itemsPerRow={6}>
      
      {populateCards}
    </Card.Group>
  );
}

export default PokemonCollection;
