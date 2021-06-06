import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addnewPoke}) {
  const [newPoke,setnewPoke]=useState({
    name:"",
    hp:"",
    frontUrl:"",
    backUrl:""
  })

  function handlesubmit(e){
    e.preventDefault()
    addnewPoke(newPoke)
    setnewPoke({
      name:"",
      hp:"",
      frontUrl:"",
      backUrl:""
    })
   
  }

  function changevalue(e){
    
    let newValues={...newPoke,[e.target.name]: e.target.value}
    setnewPoke(newValues);
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handlesubmit(e)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPoke.name} onChange={(e)=>changevalue(e)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPoke.hp} onChange={(e)=>changevalue(e)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPoke.frontUrl}
            onChange={(e)=>changevalue(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPoke.backUrl}
            onChange={(e)=>changevalue(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
