import React, { useContext } from "react";
import { RecipeContext } from "../SetContext";


export default function Filter() {

  const { setCuisine,
     setIntolerance,
      protein, 
      setProtein,
      calories,
      setCalories,
      fat,
      setFat
     } = useContext(RecipeContext);


  return (
    <div className="filterArea">
      {/* by county */}
      <div className="optionSelect">
        <h5>Country</h5>
        <select onChange={(e) => setCuisine(e.target.value)}>
          <option value="All">All</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="American">American</option>
          <option value="Mexican">Mexican</option>
          <option value="African">African</option>
          <option value="German">German</option>
          <option value="French">French</option>
          <option value="Indian">Indian</option>
          <option value="British">British</option>
          <option value="Japanese">Japanese</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>

      {/* by intolerance */}
      <div className="optionSelect">
        <h5>Intolerances</h5>
        <select onChange={(e) => setIntolerance(e.target.value)}>
          <option value="All">  --</option>
          <option value="Dairy">Dairy</option>
          <option value="Gluten">Gluten</option>
          <option value="Egg">Egg</option>
          <option value="Soy">Soy</option>
          <option value="Grain">Grain</option>
          <option value="Peanut">Peanut</option>
          <option value="Seafood">Seafood</option>
          <option value="Sesame">Sesame</option>
          <option value="Shellfish">Shellfish</option>
          <option value="Sulfite">Sulfite</option>
          <option value="Wheat">Wheat</option>
        </select>
      </div>

      {/* by Protein */}
      <div className="inputRange">
        <label htmlFor="minProtein">
          <h5>Max protein : {protein}</h5>
        </label>
        <input
          type="range"
          name="minProtein"
          min="10"
          max="100"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}        
        />
      </div>

      {/* by Calories */}
      <div className="inputRange">
        <label htmlFor="minCalories">
          <h5>Max calories : {calories}</h5>
        </label>
        <input
          type="range"
          name="minCalories"
          min="50"
          max="800"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>

    {/* by Fat */}
    <div className="inputRange">
        <label htmlFor="minFat">
          <h5>Max fat : {fat}</h5>
        </label>
        <input
          type="range"
          name="minFat"
          min="1"
          max="100"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
        />
      </div>
    </div>
  );
}
