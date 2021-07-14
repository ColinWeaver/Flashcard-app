import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ReadDeckRequest from "../../DeckRequests/ReadDeckRequest";
import DeleteDeckRequest from "../../DeckRequests/DeleteDeckRequest";
import DisplayCards from "./DisplayCards";
import DisplayDeck from "./DisplayDeck";

function View({setDecks}) {
  const params = useParams();
  const deckId = params.deckId;
  const history = useHistory();
  const [deck, setDeck] = useState(null);
  const [deleteDeckRender, setDeleteDeckRender] = useState(false);
  ///const [deleteCardRender, setDeleteCardRender] = useState(false);
  //const [cardId, setCardId] = useState("");
  const [deleted, setDeleted] = useState(false)
  const [deleteCardRender, setDeleteCardRender] = useState(false);
  const [cardDeleted, setCardDeleted] = useState(false);

  function deleteDeckHandler(){
    const confirm = window.confirm('are you sure you want to delete?');
    if (confirm) setDeleteDeckRender(true)
    if (!confirm){
      history.push(`/decks/${deckId}`)
    }
  }

 function noCardsTitle(){
   if (deck.cards.length === 0) {
     return (
   <p>This deck has no cards.</p>
     )
   }
 }
 
 useEffect(() => {
   async function test(){
  if (cardDeleted) {
    console.log("testasync function")
    await setDeck(null)
    await setCardDeleted(false)
    history.push(`/decks/${deckId}`);
  }
}
test()
}, [cardDeleted, deckId, history])

  useEffect(() => {
    async function test(){
    if ((deleted) && !deleteDeckRender) {
      await setDeleted(false);
      await setDecks(null);
      console.log("test")
      history.push('/');
    }
  }
    test()
  }, [deleteDeckRender, deleted, history, setDecks])


  if (deleteDeckRender) {
    return <DeleteDeckRequest 
    setDeleted={setDeleted} 
    deckId={deckId} 
    setDeleteRender={setDeleteDeckRender} 
    setDecks={setDecks}/>
  }

  if ((!deck) && (deckId)) {
    return <ReadDeckRequest deckId={deckId} setDeck={setDeck} />
  }
 


return (
  <>
  <DisplayDeck
  deckId={deckId}
  deleteDeckHandler={deleteDeckHandler}
  noCardsTitle={noCardsTitle}
  deck={deck}
  />
  <DisplayCards
  deck={deck}
  deckId={deckId}
  setDeck={setDeck}
  //deleteCardHandler={deleteCardHandler}
  //setDeleteCardRender={setDeleteCardRender}
  //setCardId={setCardId}
  setDecks={setDecks}
  setDeleted={setDeleted}
  //cardDeleted={cardDeleted}
  setDeleteCardRender={setDeleteCardRender}
  deleteCardRender={deleteCardRender}
  setCardDeleted={setCardDeleted}
   />
  </>
)
}



  



export default View;
