import React from "react";
import CreateCardRequest from "../../CardRequests/CreateCardRequest";

function AddCards(props) {
  const {
    setCards, 
    setCard, 
    card, 
    deckId, 
    setDeck, 
    cardId, 
    setFront, 
    setBack, 
    setDecks, 
    decks
  } = props;
console.log("deckId", deckId, "card", card)


  if (card && !cardId ) {
    return (
    <CreateCardRequest 
    setDecks={setDecks} 
    decks={decks} 
    setCards={setCards} 
    setFront={setFront} 
    setBack={setBack} 
    setCard={setCard} 
    card={card} 
    deckId={deckId} 
    setDeck={setDeck}  
    cardId={cardId}
    />
    )
  }
  else return null;
}

export default AddCards;
