import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
        className="navbar__logo"
      />
      <div className="navbar__search">
        <input type="text" className="navbar__searchInput" />
        <SearchIcon className="navbar__searchIcon"></SearchIcon>
      </div>
      <div className="navbar__nav">
        <div className="nav__option">
          <span className="nav__optionLineOne">Hello User</span>
          <span className="nav__optionLineTwo">Sign In</span>
        </div>
        <div className="nav__option">
          <span className="nav__optionLineOne">Returns</span>
          <span className="nav__optionLineTwo">& Orders</span>
        </div>
        <div className="nav__option">
          <span className="nav__optionLineOne">Your</span>
          <span className="nav__optionLineTwo">Prime</span>
        </div>

        <div className="nav__optionBasket">
          <ShoppingBasketIcon />
          <span className="nav__optionLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
