import "../App.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import BannerName from "./BannerName";
import MenuCard from "./MenuCard";
import { MenuItems, Items } from "./Data";
import ItemCard from "./ItemCard";
import DebitCard from "./DebitCard";
import SubMenuContainer from "./SubMenuContainer";
import CartItem from "./CartItem";
import { useStateValue } from "./StateProvider";
import {useHistory} from "react-router-dom"
import Container from "./Container";

function Main() {
  
  const history =useHistory()

  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "cocina01")
  );

  

  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    
    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart, total, totalPrice]);

  const setData = (itemId) => {

    setMainData(Items.filter((element) => element.itemId == itemId));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="mainContainer">
          {/* Banner  */}
          <div className="banner">
            <BannerName name={"Jeremy"} discount={"20"} more={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>

          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer />
            </div>

            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == "1" ? true : false}
                    />
                  </div>
                ))}
            </div>

            
                <div className="grid-container" >
                  {isMainData &&
                    isMainData.map((data) => (
                      <ItemCard
                        key={data.id}
                        id={data.id}
                        itemId={data.id}
                        imgSrc={data.imgSrc}
                        name={data.name}
                        ratings={data.ratings}
                        price={data.price}
                      />
                    ))}
                </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
