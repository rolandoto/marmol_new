import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useState } from "react";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
import { Items } from "./Data";
import { useEffect } from "react";
import {useHistory} from "react-router-dom"

const state = {
  cart:[]
}

const cartData =[]

function ItemCard({id, itemId, imgSrc, name, price, ratings }) {
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const [isFavourite, setFavourite] = useState(false);
  const [{}, dispatch] = useStateValue();
  const [isCart, setCart] = useState(state);
  const history =useHistory()

  const link ="https://api.whatsapp.com/send/?phone=573137263479&text="

  console.log(isCart)
  
  const icon =  isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />

  const handleClick = (value) => {
    setCurrentValue(value); 
  };

  const handClick =(even) =>{
    setCart({
      ...isCart,
      cart:[...isCart.cart,even]
    })
  }
  
  const handDetail =() =>{
    history.push(`DetailProduct/${id}`)
  }

  return (
    <div className="itemCard" id={itemId}>
    <div
      className={`isFavourite ${isFavourite ? "active" : ""}`}
      onClick={() => setFavourite(!isFavourite)}
    >
      {icon}
    </div>
    <div className="icon-whatsapp" >
          <div className="whta" >
              <a href={`${link}${name}`} target="_blank" className="sapp"     >
                <WhatsAppIcon  />
              </a>
          </div>
    </div>
    <div className="imgBox" onClick={handDetail} >
      <img src={imgSrc} alt="" className="itemImg" />
    </div>
    <div className="itemContent">
     
      <div className="bottom">
        <div className="ratings">
          {Array.apply(null, { length: 5 }).map((e, i) => (
            <i
              key={i}
              className={`rating ${currentValue > i ? "orange" : "gray"}`}
              onClick={() => handleClick(i + 1)}
            >
              <StarRounded />
            </i>
          ))}
          <h3 className="price">
            <span>$ </span>
            {price}
          </h3>
        </div>
       

          <i
            className="addToCart"
            onClick={() => {
              setCart(Items.find((n) => n.id === itemId));
            }}
          >
            <AddRounded />
          </i>
      </div>
      <h3 className="itemName">{name}</h3>
    </div>
  </div>
   
  );
}

export default ItemCard;
