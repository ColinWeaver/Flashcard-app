import React from "react";
import {Link} from 'react-router-dom';

function Navigation({deckId, deck}){

if (deckId && deck){
return  ( 
    <span>
    <Link to="/">
        Home
      </Link>
      / <Link to={`/decks/${deckId}`}>
       {deck.name}
      </Link> / Edit Deck
      <hr/>
    </span>
    )
}
else return (
    <span>
        <Link to="/">
            Home
        </Link>
        / createDeck
    </span>
)
}

export default Navigation;