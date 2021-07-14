import { useEffect } from "react";
import { updateCard } from "../../utils/api/index";
import { useHistory } from "react-router-dom";



function UpdateCardRequest({deckId, updatedCard }){
const history = useHistory();

useEffect(() => {
    async function loadData() {
      try {
      await updateCard(updatedCard);
      history.push(`/decks/${deckId}`)
     
      }
      catch(error){
        console.log("here is error:", error)
      }
    }
    loadData();
  }, [deckId, history, updatedCard]);
  return null;
}



export default UpdateCardRequest