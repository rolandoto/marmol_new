import "../App.css";
import { useCallback, useEffect, useState } from "react";
import BannerName from "./BannerName";
import MenuCard from "./MenuCard";
import { MenuItems, Items } from "./Data";
import ItemCard from "./ItemCard";
import SubMenuContainer from "./SubMenuContainer";
import { useStateValue } from "./StateProvider";
import {useHistory} from "react-router-dom"

function Main() {

  const history =useHistory()
  
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "cocina01")
  );

  const [lavamanos,setLavamanos] = useState(
    Items.filter((element) => element.itemId == "lavamanos01")
  )

  const [cocinas,setCocinas] = useState(
    Items.filter((element) => element.itemId == "cocinas01")
  )

  const [hornos,setHornos] = useState(
    Items.filter((element) => element.itemId == "hornos01")
  )

  const [campanas,setCampanas] = useState(
    Items.filter((element) => element.itemId == "campanas01")
  )

  const [herraje,setHerraje] = useState(
    Items.filter((element) => element.itemId == "herraje01")
  )

  const [lavaplatos,setLavaplatos] = useState(
    Items.filter((element) => element.itemId == "lavaplatos01")
  )

  const [cafe,setCafe] = useState(
    Items.filter((element) => element.itemId == "cafe01")
  )

  const [deli,setDeli] = useState(
    Items.filter((element) => element.itemId == "deli01")
  )

  const [cohelum,setCohelum] = useState(
    Items.filter((element) => element.itemId == "cohelum01")
  )

  const [airon,setAiron] = useState(
    Items.filter((element) => element.itemId == "airon01")
  )

  const [value,setValue] =useState(true)
  const [valueOne,setValueOne] =useState(false)
  const [valueTwo,setValueTwo] =useState(false)
  const [valueThree,setValueThree] = useState(false)
  const [valuFour,setValueFour] =useState(false)
  const [valueFive,setValueFive] =useState(false)
  const [valueSix,setValueSix] =useState(false)
  const [value9,setValues9] =useState(false)
  const [value10,setValues10] =useState(false)
  const [value11,setValue11] = useState(false)
  const [value12,setValue12] =useState(false)

  const handGriferia =() =>{
    setValue(true)
    setValueOne(false)
    setValueTwo(false)
    setValueThree(false)
    setValueFour(false)
    setValueFive(false)
    setValueSix(false)
    setValues9(false)
    setValues10(false)
    setValue11(false)
    setValue12(false)
  }

  const handLavamanos =() =>{
    setValue(false)
    setValueOne(true)
    setValueTwo(false)
    setValueThree(false)
    setValueFour(false)
    setValueFive(false)
    setValueSix(false)
    setValues9(false)
    setValues10(false)
    setValue11(false)
    setValue12(false)
  }

  const handCocinas =() =>{
    setValue(false)
    setValueOne(false)
    setValueTwo(true)
    setValueThree(false)
    setValueFour(false)
    setValueFive(false)
    setValueSix(false)
    setValues9(false)
    setValues10(false)
    setValue11(false)
    setValue12(false)
  }

  const handHornos =() =>{
    setValue(false)
    setValueOne(false)
    setValueTwo(false)
    setValueThree(true)
    setValueFour(false)
    setValueFive(false)
    setValueSix(false)
    setValues9(false)
    setValues10(false)
    setValue11(false)
    setValue12(false)
  }

  const handCamapanas =() =>{
    setValue(false)
    setValueOne(false)
    setValueTwo(false)
    setValueThree(false)
    setValueFour(true)
    setValueFive(false)
    setValueSix(false)
    setValues9(false)
    setValues10(false)
    setValue11(false)
    setValue12(false)
  }

  const handHerraje =() =>{
    setValue(false)
    setValueOne(false)
    setValueTwo(false)
    setValueThree(false)
    setValueFour(false)
    setValueFive(true)
    setValueSix(false)
    setValues9(false)
    setValues10(false)
    setValue11(false)
    setValue12(false)
  }


  const handLavaplatos =() =>{
    setValue(false)
    setValueOne(false)
    setValueTwo(false)
    setValueThree(false)
    setValueFour(false)
    setValueFive(false)
    setValueSix(true)
    setValues9(false)
    setValues10(false)
    setValue11(false)
    setValue12(false)
  }

  const handCafe =() =>{
    setValue(false)
    setValueOne(false)
    setValueTwo(false)
    setValueThree(false)
    setValueFour(false)
    setValueFive(false)
    setValueSix(false)
    setValues9(true)
    setValues10(false)
    setValue11(false)
    setValue12(false)
  }

  const handDeli =() =>{
    setValue(false)
    setValueOne(false)
    setValueTwo(false)
    setValueThree(false)
    setValueFour(false)
    setValueFive(false)
    setValueSix(false)
    setValues9(false)
    setValues10(true)
    setValue11(false)
    setValue12(false)
  }

  const handCohelum =() =>{
    setValue(false)
    setValueOne(false)
    setValueTwo(false)
    setValueThree(false)
    setValueFour(false)
    setValueFive(false)
    setValueSix(false)
    setValues9(false)
    setValues10(false)
    setValue11(true)
    setValue12(false)
  }

  const handAiron =() =>{
    setValue(false)
    setValueOne(false)
    setValueTwo(false)
    setValueThree(false)
    setValueFour(false)
    setValueFive(false)
    setValueSix(false)
    setValues9(false)
    setValues10(false)
    setValue11(false)
    setValue12(true)
  }

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
    
  }, [isMainData, cart, total, totalPrice]);

  const setData = useCallback((itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  },[setMainData])

  return (
    <div className="App">
      
      <main>
        <div className="mainContainer">
          {/* Banner  */}
          <div className="banner">
           
          </div>

          <div className="dishContainer">
            <div className="menuCard">
             
            </div>

            <div className="rowContainer">
             
                  <div onClick={handGriferia}  >
                    <MenuCard
                      name="Griferia"
                      isActive={ value ? true : false}
                    />
                  </div>

                  <div onClick={handLavamanos}  >
                    <MenuCard
                      name="Lavamanos"
                      isActive={ valueOne ? true : false}
                    />
                  </div>

                  <div onClick={handCocinas}  >
                    <MenuCard
                      name="Cubierta"
                      isActive={ valueTwo ? true : false}
                    />
                  </div>

                  <div onClick={handHornos}  >
                    <MenuCard
                      name="Hornos"
                      isActive={ valueThree ? true : false}
                    />
                  </div>

                  <div onClick={handCamapanas}  >
                    <MenuCard
                      name="Campanas"
                      isActive={ valuFour ? true : false}
                    />
                  </div>

                  <div onClick={handHerraje}  >
                    <MenuCard
                      name="Herraje de alta especificacion"
                      isActive={valueFive? true : false}
                    />
                  </div>

                  <div onClick={handLavaplatos}  >
                    <MenuCard
                      name="Lava platos"
                      isActive={ valueSix? true : false}
                    />
                  </div>
                  <div onClick={handCafe}  >
                    <MenuCard
                      name="Cafe"
                      isActive={ value9? true : false}
                    />
                  </div>

                  <div onClick={handDeli}  >
                    <MenuCard
                      name="Delonghi"
                      isActive={ value10? true : false}
                    />
                  </div>

                  <div onClick={handCohelum}  >
                    <MenuCard
                      name="Cohelum"
                      isActive={ value11? true : false}
                    />
                  </div>

                  <div onClick={handAiron}  >
                    <MenuCard
                      name="Airon"
                      isActive={ value12? true : false}
                    />
                  </div>


            </div>
                <div className="grid-container" >
                     { value && isMainData?.map((data) => (
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

                  { valueOne && lavamanos?.map((data) => (
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
                   { valueTwo && cocinas?.map((data) => (
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
                  
                  { valueThree && hornos?.map((data) => (
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

                { valuFour && campanas?.map((data) => (
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

                  {valueFive && herraje?.map((data) => (
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

                    {valueSix && lavaplatos?.map((data) => (
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

                  {value9 && cafe?.map((data) => (
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

                    {value10 && deli?.map((data) => (
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

                    {value11 && cohelum?.map((data) => (
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

                    {value12 && airon?.map((data) => (
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
