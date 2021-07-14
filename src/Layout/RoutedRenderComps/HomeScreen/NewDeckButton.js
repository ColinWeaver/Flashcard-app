import React from "react";
import {Link} from "react-router-dom";

function NewDeckButton(){
    return (
      <div>
        <div>
          <Link to="/decks/new">
            <button type="button">
              Create Deck
            </button>
          </Link>
        </div>
        <hr />
        </div>
    )
  }

  export default NewDeckButton

  