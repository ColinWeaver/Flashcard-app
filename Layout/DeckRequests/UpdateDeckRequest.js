import { useEffect } from "react";
import { updateDeck } from "../../utils/api/index";


function UpdateDeckRequest({newDeck, setRequestComplete}){
const deckObject = newDeck[0];
useEffect(() => {
    async function loadData() {
      try {
       await updateDeck(deckObject);
       setRequestComplete(true);
    }
      catch(error){
        console.log("here is error:", error)
      }
    }
    loadData();
  }, [deckObject, setRequestComplete]);
  return null;
}





export default UpdateDeckRequest