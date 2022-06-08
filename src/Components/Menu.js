import React from 'react';
import {
    AccountBalanceWalletRounded,
    Chat,
    Favorite,
    HomeRounded,
    Settings,
    SummarizeRounded,
  } from "@mui/icons-material";
  import MenuContainer from "./MenuContainer";


const Menu =() =>{
    return (
        <div className="leftMenu">
            <ul id="menu">
            {/* prettier-ignore */}
            <MenuContainer link = {'/'} icon = {<HomeRounded />}  isHome/>
            {/* prettier-ignore */}
            <MenuContainer link = {'#'} icon = {<Chat />}  />
            {/* prettier-ignore */}
            <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
            {/* prettier-ignore */}
            <MenuContainer link = {'/Favorite'} icon = {<Favorite />} />
            {/* prettier-ignore */}
            <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
            {/* prettier-ignore */}
            <MenuContainer link = {'#'} icon = {<Settings />}  />
            <div className="indicator"></div>
            </ul>
      </div>
    )
}   
export default Menu