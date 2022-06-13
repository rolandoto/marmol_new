import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import {Link} from "react-router-dom"

function Header() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <header>

      <Link to="/" >
        <img
          src="https://ciudadenredsas.info/mademarmol/wp-content/uploads/sites/42/2019/05/logo-final-1.png"
          alt=""
          className="logo"
        />
      </Link>
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Buscar Productos" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
          <p>{cart ? cart.length : ""}</p>
        </div>
      </div>
      <div className="toggleMenu">
        <BarChart className="toggleIcon"/>
      </div>
    </header>
  );
}

export default Header;
