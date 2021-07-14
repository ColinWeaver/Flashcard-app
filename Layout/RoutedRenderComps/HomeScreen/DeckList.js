import React from 'react'
import { Link } from "react-router-dom"

function DeckList({decks, deleteDeckHandler}) {
    
    if (decks.length > 0) return decks.map((singleDeck, index) => {
      return (
        <div key={index}>
          <p>{singleDeck.cards.length} cards</p>
          <h1>{singleDeck.name}</h1>
          <p>{singleDeck.description}</p>
          <Link to={`/decks/${singleDeck.id}`}>
            <button>
              view
            </button>
          </Link>
          <Link to={`/decks/${singleDeck.id}/study`}>
            <button>
           study</button>
          </Link>
            <button onClick={() => {
              deleteDeckHandler(singleDeck.id)}
            }>
            delete</button>
          <hr />
        </div>
      );
    });
    
    else return null;
  }

  export default DeckList;