import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import DeleteCardRequest from "../../CardRequests/DeleteCardRequest";

function DisplayCards(props) {
  const history = useHistory();
  const {
    deck,
    deckId,
    setDecks,
    setDeck,
    setDeleted,
    setCardDeleted,
    setDeleteCardRender,
    deleteCardRender,
  } = props;
  const [cardId, setCardId] = useState(null);
  

  function deleteCardHandler() {
    const confirm = window.confirm("are you sure you want to delete?");
    if (confirm) setDeleteCardRender(true);
    if (!confirm) {
      history.push(`/decks/${deckId}`);
    }
  }

  if (deleteCardRender) {
    return (
      <DeleteCardRequest
        deckId={deckId}
        setDeleted={setDeleted}
        setDeck={setDeck}
        cardId={cardId}
        setDeleteCardRender={setDeleteCardRender}
        //setDeleteCardRender={setDeleteRender}
        setDecks={setDecks}
        setCardDeleted={setCardDeleted}
      />
    );
  }

  if (deck) {
    const cardsArray = deck.cards;
    const display = cardsArray.map((card, index) => {
      return (
        <div key={index}>
          <h5>
            <b>Question: </b>
            {card.front}
          </h5>
          <h5>
            <b>Answer: </b>
            {card.back}
          </h5>
          <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
            <button type="button">Edit</button>
          </Link>
          <button
            type="button"
            onClick={() => {
              deleteCardHandler();
              setCardId(card.id);
            }}
          >
            Delete
          </button>

          <hr />
        </div>
      );
    });
    return <div>{display}</div>;
  } else return null;
}

export default DisplayCards;
