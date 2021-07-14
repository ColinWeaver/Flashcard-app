import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CreateDeck from "./CreateDeck";
import EditDeck from "./EditDeck";
import DeckForms from "./DeckForms";
import Navigation from "./Navigation";
import ListDecksRequest from "../../DeckRequests/ListDecksRequest";

function AddEditDeck({decks, setDecks}){
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [deck, setDeck] = useState(null);
const [renderForm, setRenderForm] = useState(false)
const params = useParams();
const deckId = params.deckId;
const history = useHistory();
const [newDeck, setNewDeck] = useState(null)
let title;
let highestId;


if (!decks) {
  return <ListDecksRequest setDecks={setDecks} />;
}

if (deckId){
  title = "Edit Deck"
}
if (!deckId){
  title = "Create Deck"
}

function cancelHandler(){
  if (deckId){
    history.push(`/decks/${deckId}`)
  }
  if (!deckId) {
    history.push('/')
  }
}

  function changeHandler(event) {
    event.preventDefault();
    if (event.target.name === "name") {
      setName(event.target.value);
    }
    if (event.target.name === "description") {
      setDescription(event.target.value);
    }
  }


  
  function submitHandler(event) {
    event.preventDefault();
    if (!deckId){
     highestId = 0;
    for (let i = 0; i < decks.length; i++) {
      if (decks[i].id > highestId) highestId = decks[i].id;
    }
    highestId += 1;
    setNewDeck({
      id: highestId,
      name: name,
      description: description,
      cards: [2],
    })
}
   if (deckId){
    setNewDeck([
        { id: deckId, name: name, description: description, cards: deck.cards },
      ]);
   }
  }

  return (
      <>
      
      <Navigation
      deckId={deckId}
      deck={deck}
      />
      <DeckForms
        deck={deck}
        cancelHandler={cancelHandler}
        title={title}
        deckId={deckId}
        name={name}
        description={description}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        renderForm={renderForm}
        />

      <EditDeck
      setName={setName}
      setDescription={setDescription}
      deck={deck}
      deckId={deckId}
      setDeck={setDeck}
      setRenderForm={setRenderForm}
      newDeck={newDeck}
      />
      
      <CreateDeck 
      setDecks={setDecks} 
      deck={deck}
      deckId={deckId}
      newDeck={newDeck}
      />
      
      </>
  )
}

export default AddEditDeck;

 
 