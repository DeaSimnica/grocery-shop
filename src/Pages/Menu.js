import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../Components/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Menu.css";

function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Some of our products</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div className="menuItem" key={key}>
              <img src={menuItem.image} alt={menuItem.name} />
              <div className="itemDetails">
                <h3>{menuItem.name}</h3>
                <p>{menuItem.price}</p>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="cart-icon"
                  onClick={() => addToCart(menuItem)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
