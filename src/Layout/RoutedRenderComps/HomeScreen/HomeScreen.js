import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ListDecksRequest from "../../DeckRequests/ListDecksRequest";
import DeckList from "./DeckList";
import NewDeckButton from "./NewDeckButton";
import DeleteDeckRequest from "../../DeckRequests/DeleteDeckRequest";

function HomeScreen({ decks, setDecks, deckId, setDeckId}) {
  const history = useHistory();
  const [deleteRender, setDeleteRender] = useState(false);
  const [deleted, setDeleted] = useState(false);
 

  useEffect(() => {
    if (deleted && !deleteRender) history.push("/");
  }, [deleteRender, deleted, history]);


  
  if (!decks) {
    return <ListDecksRequest setDecks={setDecks} />;
  }


  function deleteDeckHandler(deckId) {
    const confirm = window.confirm("are you sure you want to delete?");
    if (confirm) {
      setDeckId(deckId)
      setDeleteRender((deleteRender) => !deleteRender);
    }
    if (!confirm) {
      history.push("/");
    }
  }


  if (deleteRender && deckId) {
    return (
      <DeleteDeckRequest
        setDeleted={setDeleted}
        deckId={deckId}
        setDeleteRender={setDeleteRender}
        setDecks={setDecks}
      />
    );
  }

  
  return (
    <>
      <NewDeckButton />
      <DeckList decks={decks} deleteDeckHandler={deleteDeckHandler} />
    </>
  );
}

export default HomeScreen;
