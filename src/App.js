import React from "react";
import "./App.css";
import  {Route, Switch}  from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipesList from "./pages/RecipesList";
import SingleRecipe from "./pages/SingleRecipe";
import Error from "./pages/Error";
import SetContext from "./SetContext";
import Footer from "./components/Footer";

function App() {

  return (
    <>
     <SetContext>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/recipeslist/" component={RecipesList} />
          <Route  path="/singlerecipe/:id/" component={SingleRecipe} />
          <Route  path="*" component={Error} />
        </Switch>
        <Footer/>
      </SetContext>
    </>
  );
}

export default App;
