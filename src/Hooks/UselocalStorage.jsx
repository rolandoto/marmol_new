import { useState } from "react"

const UselocatStorage =({id} ) =>{

    if(typeof window ==="undefined") return false
    let favorite = JSON.parse(localStorage.getItem("toke" )|| "[]" )
    
    const qty = favorite.find(index => index ==id)
    if(qty){
        favorite = favorite.filter(index => index != id)
    }else{
        favorite.push(id)
    }
    localStorage.setItem("toke",JSON.stringify(favorite))

    return {
        favorite
    }
}

const ExisInfavorite =({id}) =>{

    if(typeof window ==="undefined") return false
    let favorite = JSON.parse(localStorage.getItem("toke" )|| "[]" )
    return favorite.includes(id)
}

const Pokemons =() =>{
    if(typeof window ==="undefined") return false
    return JSON.parse(localStorage.getItem("toke") || "[]")
}

export default {
                UselocatStorage,
                ExisInfavorite,
                Pokemons   
                }