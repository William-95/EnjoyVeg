import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../SetContext";
import Loading from "./Loading";
import Request from "./ClientApi";

export default function SingleRequest() {
  let params = useParams();
  const { recipeState, load, setLoad } = useContext(RecipeContext);
let idFilter=params.id
  const newRecipeState = recipeState.filter((item) => {return item.id === `${idFilter}`});
  console.log(newRecipeState);
  /*Loading*/
  useEffect(() => {
    setLoad({ load: true });

    const timer = setTimeout(() => {
      setLoad({ load: false });
    }, 1000);

    return () => clearTimeout(timer);

    // eslint-disable-next-line
  }, []);
  /*End Loading*/

  if (load.load === true) {
    return <Loading />;
  }
  return (
    <div>
      <Request.SingleClientApi />
      <div>
        {newRecipeState.summary}
        
      </div>
    </div>
  );
}
