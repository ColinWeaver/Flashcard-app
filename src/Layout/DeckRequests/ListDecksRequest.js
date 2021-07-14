import { useEffect } from "react";
import { listDecks } from "../../utils/api/index";

function ListDecksRequest({  setDecks }){
useEffect(() => {
    async function loadData() {
      try {
      const data = await listDecks();
      await setDecks(data);
      }
      catch (error){
        console.log("Problme", error)
      }
    }
    loadData();
  }, [setDecks]);
  return null;
  
}



export default ListDecksRequest