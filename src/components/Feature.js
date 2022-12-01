import React from "react";
import vegan from "../img/vegan.png";
import recipeBook from "../img/recipe-book.png";
import chef from "../img/chef.png";
import museum from "../img/museum.png";
import Title from "./Title";

export default function Feature() {
  let state = {
    feature: [
      {
        icon: vegan,
        title: "100% Vegetarian Recipes",
        info:
          "All our recipes are studied and researched for the purpose of a completely vegetarian diet",
      },
      {
        icon: recipeBook,
        title: "Recipe Step By Step",
        info:
          "We will take you by the hand from the beginning of the preparation until its completion",
      },
      {
        icon: chef,
        title: "Chef's Advice",
        info:
          "Every day you can find out about new recipes recommended by our chefs",
      },
      {
        icon: museum,
        title: "History",
        info:
          "You will find the origins and history of each recipe as a little additional curiosity",
      },
    ],
  };
  return (
    <div>
      <Title title='Info'/>
      <section className="featureContainer">
        <div className="featureCard">
          {state.feature.map((item, index) => {
            return (
              <div key={index} className="featureContainer">
                <img src={item.icon} className="featureIcon" alt=''/>
                <h4>{item.title}</h4>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
