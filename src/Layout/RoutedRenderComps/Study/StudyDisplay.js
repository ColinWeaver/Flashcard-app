import React from "react";
import { Link } from "react-router-dom";

function StudyDisplay(props) {
  const {
    currentCard,
    cardsArray,
    deckId,
    deck,
    cardIndex,
    cardDisplay,
    lastCardDisplay,
    cardFlipHandler,
    NextButton,
  } = props;

  // if (currentCard && cardsArray.length > 2) {
  //   return (
  //     <div>
  //       <span>
  //         <Link to="/">Home</Link>/{" "}
  //         <Link to={`/decks/${deckId}`}>
  //           {deck.name}
  //         </Link> / Study
  //       </span>
  //       <br />
  //       <h2>Study: {deck.name}</h2>
  //       <hr />
  //       <div>
  //         <h5>
  //           Card {cardIndex + 1} of {cardsArray.length}
  //         </h5>
  //         <p>
  //           {/* {cardDisplay()} */}
  //           {/* {lastCardDisplay()} */}
  //           {cardDisplay()}
  //           {lastCardDisplay()}
  //         </p>
  //         <button onClick={cardFlipHandler}>Flip</button>
  //         {NextButton()}
  //       </div>
  //       <br />
  //       <hr />
  //     </div>
  //   );
  // } else {
  //   return null;
  // }
  return null;
}

export default StudyDisplay;
