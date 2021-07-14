import CreateDeckRequest from "../../DeckRequests/CreateDeckRequest";

function CreateDeck({ newDeck, setDecks, deckId }) {

  if (newDeck && !deckId) {
     return <CreateDeckRequest newDeck={newDeck} setDecks={setDecks} />
  }
  else return null;
  
}

export default CreateDeck;
