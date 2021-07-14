import { useEffect } from "react";
import { readDeck } from "../../utils/api/index";
import {useHistory} from "react-router-dom";

function ReadDeckRequest({deckId, setDeck}){
const history = useHistory();

useEffect(() => {
    async function loadData() {
      try {
      const data = await readDeck(deckId);
      await setDeck(data);
      }
      catch(error){
        console.log("here is error:", error)
        history.push("/NotFound");
      }
    }
    loadData();
  }, [deckId, history, setDeck]);
return null;
}



export default ReadDeckRequest;