import React, { useContext, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { RecipeContext } from "../SetContext";

/*apiKey */
//  const apiKey3 = `apiKey=0205ee87d117432690b54c07f0e20f89`;
//  const apiKey=`apiKey=31f3807eea49404c9733ab813bf795ad`;
// const apiKey2 = `apiKey=e096d1341aa24ad9b45c7459b5a1c1fd`;

/*end apiKey */

/*axios*/
const api = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/`,
  params: {
    addRecipeInformation: true,
    number: 5,
    diet: `vegetarian`,
    responseType: "json",
  },
});

/*ClienAPI Function*/
function ClientApi() {
  const {
    valueButton,
    setRecipeState,
    setLoading,
    value,
    cuisine,
    intolerance,
    protein,
    calories,
    fat,
  } = useContext(RecipeContext);
  
  
  /*requestApi*/
  useEffect(() => {
    
    api
      .get(
        `complexSearch?${process.env.REACT_APP_API_KEY}&query=${value}&cuisine=${cuisine}&intolerances=${intolerance}&maxProtein=${protein}&maxCalories=${calories}&maxFat=${fat}`
      )

      .then((response) => {
        setRecipeState(response.data.results);
        setLoading({ loading: false });
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, valueButton, cuisine, intolerance, protein, calories, fat]);

  return <></>;
}
/*End ClienAPI*/

// /*SingleClienAPI Function*/
// function SingleClientApi() {
//     let params = useParams();

//     const {setLoad,setOneRecipe} = useContext(RecipeContext);
 

//  useEffect(() => {
//     api
//       .get(`${params.id}/card?${process.env.REACT_APP_API_KEY}`)

//       .then((response) => {
//         setOneRecipe(response.data);
//         setLoad({ load:false });
        
//       })

//       .catch((err) => console.log(err));

//    // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [params.id]);
  
  


//     return<></>
// }
// /*End SingleClienAPI*/

const Request={ClientApi}
export default Request