import { useEffect } from "react";
import { deleteCard } from "../../utils/api/index";


function DeleteCardRequest({cardId, setDecks, setCardDeleted, setDeleteCardRender}){
useEffect(() => {
    async function loadData() {
      try {
      await deleteCard(cardId);
      await setDecks(null)
      await setDeleteCardRender(false);
      await setCardDeleted(true)
      
      }
      catch(error){
        console.log("here is error:", error)
      }
    }
    loadData();
  }, [cardId, setCardDeleted, setDecks, setDeleteCardRender]);
  
  return null
}



export default DeleteCardRequest