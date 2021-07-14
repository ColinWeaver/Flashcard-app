import { useEffect } from "react";
import { createCard } from "../../utils/api/index";
import { useHistory } from "react-router-dom";

function CreateCardRequest(props){
  const {
  card,
  setCards,
  setCard,
  deckId,
  setDeck,
  setFront,
  setBack,
  setDecks,
  
  } = props;

  const history = useHistory();
  

  useEffect(() => {
    async function loadData() {
      try {
        await createCard(
         // deckIdString,
          deckId, card
        );
        await setCard(null);
        await setDeck(null);
        await setFront("");
        await setBack("");
        await setCards(null);
        await setDecks(null);

        history.push(`/decks/${deckId}/cards/new`);
      } catch (error) {
        console.log("here is error:", error);
      }
    }
    loadData();
  }, [card, deckId, history, setBack, setCard, setCards, setDeck, setDecks, setFront]);
  return null;
}

export default CreateCardRequest;
