import {
  BarChart,
  SearchRounded,
} from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite';
import UselocalStorage from "../Hooks/UselocalStorage"
import  AutoProvider from "../PrivateRoute/AutoProvider"

function Header() {

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  const [favorite,setFavorite] =useState(UselocalStorage.Pokemons())

  const {jwt} =useContext(AutoProvider)
  
  return (
    <header>
      <Link to="/" >
          <img
            src="https://github.com/rolandoto/galeria/blob/main/logo-final.jpg?raw=true"
            alt=""
            className="logo"
          />
        </Link>
        <div className="inputBox">
         
        </div>
        <div className="shoppingCart">
         <Link to="/Favorite" >
          <FavoriteIcon className="cart" />
          <div className={`${!favorite ? "noCartItem" : "cart_content"}`}>
            <p>{favorite ? favorite.length : "2112"}</p>
          </div>
          </Link>
        </div>
        <div className="toggleMenu">
          <BarChart className="toggleIcon"/>
        </div>
        <div className={jwt &&`title-account`} >
        <span> {jwt && `${`Bienvenido ${jwt.Islogin}`}`}</span>
        </div>
    </header>
  );
}

export default Header;
