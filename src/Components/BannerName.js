import React, { useState } from "react";

function BannerName({ name, discount, more }) {
  const currency = "$";


  const [state,setState] =useState(2)

  const hand =() =>{
    setState(state +1)
  }


  return (
    <div className="bannerContent">
      <h3>Bienvenido a mademarmol </h3>
      <a href={more}>Ver Mas</a>
    </div>
  );
}

export default BannerName;
