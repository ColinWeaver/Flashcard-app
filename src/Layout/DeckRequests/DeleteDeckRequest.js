import { useEffect } from "react";
import { deleteDeck } from "../../utils/api/index";

function DeleteDeckRequest({ deckId, setDeleted, setDeleteRender, setDecks }){
  
useEffect(() => {
    async function loadData() {
      try {
        await deleteDeck(deckId);
        await setDecks(null);
        await setDeleteRender(false);
        await setDeleted(true);
      }
      catch(error){
        console.log("here is error:", error)
      }
    }
    loadData();
  }, [deckId, setDecks, setDeleteRender, setDeleted]);
 
  return null
}



export default DeleteDeckRequest