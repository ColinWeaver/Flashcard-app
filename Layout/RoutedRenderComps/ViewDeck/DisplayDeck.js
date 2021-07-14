import React from 'react'
import {Link} from "react-router-dom"

function DisplayDeck(props){

    const {
        deck,
        deckId,
        deleteDeckHandler,
        noCardsTitle
    } = props;

if (deck){ return (
    <div>
      <span>
      <Link to="/">
          Home
        </Link>
        / {deck.name}
        <hr/>
      </span>
      <h2>{deck.name}</h2>
      <p>{deck.description}</p>
      <span>
        <Link to={`/decks/${deckId}/edit`}>
        <button>Edit</button>
        </Link>
        <Link to={`/decks/${deckId}/study`}>
          <button>
            Study
          </button>
        </Link>
        <Link to={`/decks/${deckId}/cards/new`}>
        <button>+ Add Cards</button>
        </Link>
        <button onClick={deleteDeckHandler}>delete</button>
      </span>
      <br />
      <br/>
      <h1>Cards</h1>
      <h5>{noCardsTitle()}</h5>
      <hr/>
    </div>
  );
}
  else return null;
}


export default DisplayDeck;