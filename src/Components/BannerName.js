import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "$";
  return (
    <div className="bannerContent">
      <h3>Bienvenido MadeMarmol</h3>
      <a href={more}>Ver Mas</a>
    </div>
  );
}

export default BannerName;
