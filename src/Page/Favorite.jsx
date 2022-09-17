import React,{useState} from "react";
import Card from "../Components/Card";
import { Items } from "../Components/Data";
import UselocalStorage from "../Hooks/UselocalStorage"


const Favorite = () => {

    const [favorite,setFavorite] =useState(UselocalStorage.Pokemons)
    
    return (
    <div className="App" >
        <div  className="product-detail-container" >
             <div className="grid-container" >
                    {favorite.map(index =>{
                        return  <Card item={index} />
                    })}
            </div>
        </div>
    </div>
    );
}

export default Favorite;