import React from "react";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";


export default function RecipeCard({ title, id, image }) {
 
  return (
    <article className="recipeCard">
      <div className="imgContainer">
        <img src={image || "../img/defaultImg.jpg"} alt="" />

        <Link to={`/singlerecipe/${id}`}  className="btn-primary recipeLink">
         More
        </Link>
      </div>
      <p className="recipeTitle">{title}</p>
    </article>
  );
}

RecipeCard.propTypes = {

    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,

};
