import { useEffect } from "react";
import { createDeck } from "../../utils/api/index";
import { useHistory } from "react-router-dom";


function CreateDeckRequest({newDeck, setDecks}){
const history = useHistory();

useEffect(() => {
    async function loadData() {
      try {
      const data = await createDeck(newDeck);
      await setDecks(null)
      history.push(`/decks/${data.id}`);
      }
      catch(error){
        console.log("here is error:", error)
      }
    }
    loadData();
  }, [history, newDeck, setDecks]);
  
  return null;
}



export default CreateDeckRequest