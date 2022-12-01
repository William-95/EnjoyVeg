import React, { useContext } from "react";
import { RecipeContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function Filter() {
  const history = useHistory();
  const { cuisine, setCuisine } = useContext(RecipeContext);
  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    history.push("/recipeslist/");
    setCuisine(
      {
        [name]: value,
      }
    );
  };
  const { Italian, Chinese, American,Mexican,glutenFree } = cuisine;
  console.log(cuisine);
  

  return (
    <div>
      <div>
        <input
          type="checkbox"
          value="Italian"
          id="Italian"
          checked={Italian}
          onChange={(e) => setCuisine(e.target.value)}
          />
        <label htmlFor="Italian">Italian</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="Chinese"
          id="Chinese"
          checked={Chinese}
          onChange={(e) => setCuisine(e.target.value)}
        />
        <label htmlFor="Chinese">Chinese</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="American"
          id="American"
          checked={American}
          onChange={(e) => setCuisine(e.target.value)}
        />
        <label htmlFor="American">American</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="Mexican"
          id="Mexican"
          checked={Mexican}
          onChange={(e) => setCuisine(e.target.value)}
        />
        <label htmlFor="Mexican">Mexican</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="glutenFree"
          id="glutenFree"
          checked={glutenFree}
          onChange={handleChange}
        />
        <label htmlFor="glutenFree">Gluten Free</label>
      </div>



    </div>
  );
}
