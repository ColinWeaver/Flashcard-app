import React from "react";
import { Link } from "react-router-dom";

function NotEnoughCards({ deck }) {
  const deckId = deck.id;
  if (deck.cards.length < 3) {
    return (
      <div>
        <span>
          <Link to="/">Home</Link> /
          <Link to={`/decks/${deckId}`}>{deck.name}</Link> / Study
          <hr />
        </span>
        <h1>{deck.name}: Study</h1>
        <h2>Not enough cards.</h2>
        <p>
          You need at least 3 cards to study. There are {deck.cards.length}{" "}
          cards in this deck.
        </p>
        <Link to={`/decks/${deckId}/cards/new`}>
          <button>+ Add Cards</button>
        </Link>
      </div>
    );
  } else return null;
}

export default NotEnoughCards;
