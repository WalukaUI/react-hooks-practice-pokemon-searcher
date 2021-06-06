import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const URL="http://localhost:3001/pokemon"
  const [pokemans,setPokemans]=useState([])

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(URL,requestOptions)
    .then(r=>r.json())
    .then(j=>
    setPokemans(j))
  },[])
  
  function checkpokes(text){
    if(text===""){
      fetch(URL)
      .then(r=>r.json())
      .then(j=>
      setPokemans(j))
    }else{
      let serchvalue=pokemans.filter((e)=>e.name.includes(text))
      setPokemans(serchvalue)
    }
  }

  function addnewPoke(obj){
    let newObject={
      name:obj.name,
      hp:parseInt(obj.hp),
      sprites:{
        front:obj.frontUrl,
        back:obj.backUrl
      }
    }
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObject)}

      fetch(URL,requestOption)
      .then(r=>r.json())
      .then(j=>setPokemans([...pokemans,j]))

  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addnewPoke={addnewPoke}/>
      <br />
      <Search checkpokes={checkpokes}/>
      <br />
      <PokemonCollection pokmansData={pokemans}/>
    </Container>
  );
}

export default PokemonPage;
