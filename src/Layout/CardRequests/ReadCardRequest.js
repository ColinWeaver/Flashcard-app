import { useEffect } from "react";
import { readCard } from "../../utils/api/index";
import { useHistory } from "react-router-dom";



function ReadCardRequest({ setCard, cardId}){
const history = useHistory();

useEffect(() => {
    async function loadData() {
      try {
      const data = await readCard(cardId);
       await setCard(data);
      }
      catch(error){
        console.log("here is error:", error)
        history.push('/NotFound')
      }
    }
    loadData();
  }, [cardId, history, setCard]);
  return null;
}



export default ReadCardRequest