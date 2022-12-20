import React, { Component} from "react";
import classNames from "classnames";
import logo from "../img/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";

export default class Navbar extends Component {
  state={
    isOpen:false
  }
  handleToggle = () => {
    this.setState({isOpen:!this.state.isOpen});
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navCenter">
          <div className="navHeader">
            <Link to="/">
              <img className="navLogo" src={logo} alt="" />
            </Link>
            <SearchBar />
            <button
              type="button"
              className="navBtn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="navIcon" />
            </button>
          </div>

          
          <ul className={classNames('navLinks',{'showNav':this.state.isOpen})}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipeslist/">Recipes</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
