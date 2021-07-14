import { useEffect, useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import NotEnoughCards from "./NotEnoughCards";
import ReadDeckRequest from "../../DeckRequests/ReadDeckRequest";


function Study() {
  const param = useParams();
  const deckId = param.deckId;
  const history = useHistory();
  const [cardFront, setCardFront] = useState(true);
  const [currentCard, setCurrentCard] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [deck, setDeck] = useState(null);
  const [flipNumber, setFlipNumber] = useState(0);
  //const [showPopUp, setShowPopUp] = useState(false);
  //const [lastCard, setLastCard] = useState(false)
  let cardsArray;

  //restart deck
  useEffect(() => {
    async function restart() {
      if (lastCardDisplay()) {
        const confirm = await window.confirm(
          "Do you want to restart the deck?"
        );
        if (confirm) {
          await setCurrentCard(cardsArray[0]);
          await setCardIndex(0);
          await setFlipNumber(0);
          await setCardFront(true);
          await history.push(`/decks/${deckId}/study`);
          
        } else {
          await history.push(`/`);
        }
      }
    }
    restart();
  });

 


  //loading deck, cardsArray, currentCard
  if (!deck) {
    return (
      <ReadDeckRequest
        deckId={deckId}
        setDeck={setDeck}
      />
    );
  }
  if (deck) {
    cardsArray = deck.cards;
  }
  if (!currentCard && cardsArray && cardsArray.length > 0) {
    setCurrentCard(cardsArray[0]);
  }

  //card display handlers
  function cardDisplay() {
    if (currentCard === cardsArray[cardsArray.length - 1] && !cardFront){
      return null;
    }
    if (cardFront) {
      return currentCard.front;
    }
    else return currentCard.back;
  }

  function lastCardDisplay() {
    if (
      cardsArray &&
      currentCard === cardsArray[cardsArray.length - 1] &&
      !cardFront
    ) {
      return currentCard.back;
    }
  }
  
     


  //event handlers
  function cardFlipHandler() {
    setCardFront((cardFront) => !cardFront);
    setFlipNumber((flipNumber) => flipNumber + 1);
    NextButton();
  }


  function NextButton() {
    if ((flipNumber > 0) && (cardIndex < cardsArray.length - 1)) {
      return (
        <button
          onClick={() => {
            setCurrentCard(cardsArray[cardIndex + 1]);
            setCardIndex((cardIndex) => cardIndex + 1);
            setCardFront(true);
            setFlipNumber(0);
          }}
        >
          Next
        </button>
      );
    } else return null;
  }

 
  if ((cardsArray) && currentCard && (cardsArray.length > 2)) {
    return (
      <div>
        <span>
          <Link to="/">Home</Link>/{" "}
          <Link to={`/decks/${deckId}`}>
            {deck.name}
          </Link> / Study
        </span>
        <br />
        <h2>Study: {deck.name}</h2>
        <hr />
        <div>
          <h5>
            Card {cardIndex + 1} of {cardsArray.length}
          </h5>
          <p>
            {cardDisplay()}
            {lastCardDisplay()}
          </p>
          <button onClick={cardFlipHandler}>Flip</button>
          {NextButton()}
        </div>
        <br />
        <hr />
      </div>
    );
  } 
  if ((cardsArray) && (cardsArray.length < 3)) {
    return <NotEnoughCards deck={deck}/>
  }

  else {
    return null;
  }
}

export default Study;
