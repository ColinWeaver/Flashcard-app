import { useState } from "react";
import { useParams } from "react-router-dom";
import ReadDeckRequest from "../../DeckRequests/ReadDeckRequest";
import AddCards from "./AddCards";
import CardForms from "./CardForms";
import EditCard from "./EditCard";

function Cards({ setDecks, decks }) {
  const params = useParams();
  const deckId = params.deckId;
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState(null);
  const [deck, setDeck] = useState(null);
  const [cardId, setCardId] = useState(params.cardId);
  const [updatedCard, setUpdatedCard] = useState(null);
  let highestId;
  let title;
  let breadCrumbTitle;
  let submitButtonTitle;
  let cancelButtonTitle;


  if (cardId) {
    title = `Edit Card`;
    breadCrumbTitle = `Edit card ${cardId}`
    submitButtonTitle = 'Submit';
    cancelButtonTitle = "Cancel";
  }
  if (!cardId && deck) {
    title = `Add Card`;
    breadCrumbTitle = 'Add Card';
    submitButtonTitle = "Save";
    cancelButtonTitle = "Done";
  }



  if (!deck) {
    highestId = null;
    return <ReadDeckRequest deckId={deckId} setDeck={setDeck} />;
  }
  if (!cards && deck) {
    setCards(deck.cards);
  }



  function changeHandler(event) {
   // event.preventDefault();
    if (event.target.name === "front") {
      setFront(event.target.value);
    }
    if (event.target.name === "back") {
      setBack(event.target.value);
    }
  }



  function submitHandler(event) {
    event.preventDefault();
    if (!cardId) {
      highestId = 0;
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].id > highestId) highestId = cards[i].id;
      }
      highestId += 1;
      setCard({
        //id: highestId,
        front: front,
        back: back,
      });
    } else {
      setUpdatedCard({
        id: cardId,
        front: front,
        back: back,
        deckId: Number(deckId),
      });
    }
  }



  return (
    <>
      <EditCard
        deckId={deckId}
        setCard={setCard}
        card={card}
        setDeck={setDeck}
        cardId={cardId}
        updatedCard={updatedCard}
        setUpdatedCard={setUpdatedCard}
        setFront={setFront}
        setBack={setBack}
        setCardId={setCardId}
      />

      <AddCards
        card={card}
        deckId={deckId}
        setDeck={setDeck}
        cardId={cardId}
        front={front}
        back={back}
        setFront={setFront}
        setBack={setBack}
        setCard={setCard}
        setCards={setCards}
        setDecks={setDecks}
        decks={decks}
      />

      <CardForms
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        cards={cards}
        cardId={cardId}
        deckId={deckId}
        deck={deck}
        front={front}
        back={back}
        title={title}
        cancelButtonTitle={cancelButtonTitle}
        submitButtonTitle={submitButtonTitle}
        breadCrumbTitle={breadCrumbTitle}
      />
    </>
  );
}

export default Cards;
