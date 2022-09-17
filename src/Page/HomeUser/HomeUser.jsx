import React from "react"
import AboutUs from "../About/About"
import Author from "../Author/Author"
import Header from "../Header/Header"
import HomeMain from "../HomeMain/HomeMain"
import SpecialMenu from "../Menu/SpecialMenu"
import "./HomeUser.css"

const HomeUser =() =>{

    return (
        <>
            <HomeMain />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Author />
            
        </>
    )

}
export default HomeUser