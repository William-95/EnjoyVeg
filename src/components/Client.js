import React, { Component ,useContext} from 'react'
import axios from "axios";
import { RecipeContext } from "../SetContext";


export default class Client extends Component {
    const { setRecipeState,setLoading } = useContext(RecipeContext);
     /*axios*/
 const api = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/`,
    params: {
      addRecipeInformation: true,
      number: 100,
      diet: `vegetarian`,
      responseType: "json",
    },
  });

  render() {
      /*requestApi*/
      api
      .get(
        `complexSearch?${apiKey}&query=${value}&cuisine=${cuisine}&intolerances=${intolerance}&maxProtein=${protein}&maxCalories=${calories}&maxFat=${fat}`
      )
  
      .then((response) => {
        setRecipeState(response.data.results);
        setLoading({ loading: false });
        
      })
  
      .catch((err) => console.log(err));
  
    return (
    <></>
    )
  }
}
