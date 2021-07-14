import { useEffect } from "react";
import UpdateCardRequest from "../../CardRequests/UpdateCardRequest";
import ReadCardRequest from "../../CardRequests/ReadCardRequest";

function EditCard(props) {
  const {
    deckId,
    card,
    setDeck,
    setCard,
    cardId,
    setCardId,
    updatedCard,
    setFront,
    setBack,
  } = props;

  //takes values from loaded card and transfers them state variables in forms
  useEffect(() => {
    async function declare() {
      if (card && card.id) {
        const tempFront = await card.front;
        const tempBack = await card.back;
        await setFront(tempFront);
        await setBack(tempBack);
        await setCard((card) => {
          card.id = null;
          return card;
        });
      }
    }
    declare();
  }, [card, setBack, setCard, setFront]);


//loads previous card
  if (cardId && !card) {
    return (
      <ReadCardRequest
        cardId={cardId}
        setCard={setCard}
        deckId={deckId}
        card={card}
      />
    );
  }

  //updates card
  if (updatedCard) {
    return (
      <UpdateCardRequest
        setCardId={setCardId}
        updatedCard={updatedCard}
        deckId={deckId}
        card={card}
        cardId={cardId}
        setDeck={setDeck}
      />
    );
  } else return null;
}

export default EditCard;
