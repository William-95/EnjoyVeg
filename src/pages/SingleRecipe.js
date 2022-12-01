import React, {useContext,useState,useEffect} from 'react'
import Banner from '../components/Banner'
import { Link ,useParams} from 'react-router-dom/'
import { RecipeContext } from '../SetContext'
//const apiKey2 = `apiKey=0205ee87d117432690b54c07f0e20f89`;
const apiKey=`apiKey=1eba625fd6e54c87b44c656397f62614` 

export default function SingleRecipe() {
  let params=useParams()
  const {api}=useContext(RecipeContext);
 
  const[oneRecipe,setOneRecipe]=useState([{}])
  const[ingredients,setIngredients]=useState([{}])
  useEffect(() => {
    api
      .get(`${params.id}/information?${apiKey}`)
      
      .then((response) => {
        setOneRecipe(response.data);
        setIngredients(response.data.extendedIngredients)
      })
      
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[params.id]);
console.log(oneRecipe);
   
    return (
      <div>
        <br></br>
        
        <header className='headerBg'>
        <Banner title="the chef recomands">
        <Link to="/" className="btn-primary">
           back home
        </Link>
      </Banner>
      </header>
      <h2>{oneRecipe.title}</h2>
      <div>
        <ul>
      {ingredients.map((item) => {
          return (
<li>{item.aisle}</li>
          )
          })}
          </ul>
      </div>
      <div dangerouslySetInnerHTML={{ __html:oneRecipe.instructions}} />
   
      </div>
    )
  }


