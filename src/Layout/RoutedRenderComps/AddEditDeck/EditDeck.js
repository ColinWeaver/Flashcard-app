import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

import ReadDeckRequest from "../../DeckRequests/ReadDeckRequest";
import UpdateDeckRequest from "../../DeckRequests/UpdateDeckRequest";

function EditDeck(props) {
const history = useHistory()
const [doneEditing, setDoneEditing] = useState(false);
const [requestComplete, setRequestComplete] = useState(false);

const {
  setName,
  setDescription,
  deck,
  deckId,
  setDeck,
  setRenderForm,
  newDeck
} = props;


  useEffect(() => {
    async function declare() {
      if (deckId && deck) {
        const tempName = await deck.name;
        const tempDescription = await deck.description;
        await setName(tempName);
        await setDescription(tempDescription);
        await setRenderForm(true);
      }
    }
    declare();
  }, [deck, deckId, setDescription, setName, setRenderForm]);

  useEffect(() => {
    async function doneEdit() {
      if (Array.isArray(newDeck) && newDeck.length > 0) {
        await setDoneEditing(true);
      }
    }
    doneEdit();
  }, [newDeck]);
  
  useEffect(() => {
    if ((requestComplete) && deck) history.push(`/decks/${deckId}`)
  }, [deck, deckId, history, requestComplete])

  if (!deck && deckId){
    return <ReadDeckRequest deckId={deckId} setDeck={setDeck} />
  }

  if (doneEditing){
    return <UpdateDeckRequest newDeck={newDeck} deckId={deckId} setRequestComplete={setRequestComplete} />
  }
  
 return null;
}

export default EditDeck;
