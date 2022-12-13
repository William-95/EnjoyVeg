import React,{useContext} from 'react'
import { RecipeContext } from '../SetContext';
import { FcSearch} from "react-icons/fc";
import {useHistory} from 'react-router-dom'


export default function SearchBar() {
  const {value,setValue,setValueButton}=useContext(RecipeContext);
  const history=useHistory()
  const handleClick = () => {
    setValueButton(value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setValueButton(value);
   history.push('/recipeslist/')
  }
  return (
    <div className='containerForm'>
      <form onSubmit={handleSubmit} className='formSearch'>
      <FcSearch onClick={handleClick}/>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='inputText'
        placeholder="Search..."
      />
      
   
      </form>
    </div>
  )
}

