import styles from "./Expenses.css";
import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";
import { GrConfigure } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Expenses() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const todayExpenses = [
    {
      id: 1,
      expense: "Grocery",
      time: "5:12 pm",
      location: "Belanja di pascar",
      price: 326.8,
      icon: "cartIcon",
      iconBackgroundColor: "#32a7e2",
    },
    {
      id: 2,
      expense: "Transportation",
      time: "5:12 pm",
      location: "Naik bus umum",
      price: 15.0,
      icon: "transportIcon",
      iconBackgroundColor: "#B548C6",
    },
    {
      id: 3,
      expense: "Housing",
      time: "5:12 pm",
      location: "Bayar Listrik",
      price: 185.75,
      icon: "houseIcon",
      iconBackgroundColor: "#FF8700",
    },
  ];
  const previousExpenses = [
    {
      id: 1,
      expense: "Food and Drink",
      time: "5:12 pm",
      location: "Makan Steak",
      price: 156.0,
      icon: "cartIcon",
      iconBackgroundColor: "#DC3434",
    },
    {
      id: 2,
      expense: "Entertainment",
      time: "5:12 pm",
      location: "Nonton Bioskop",
      price: 35.2,
      icon: "transportIcon",
      iconBackgroundColor: "#4BA83D",
    },
  ];
  const spendCategories = [
    {
      id: 1,
      category: "Ferreteria",
      price: 872.4,
    },
    {
      id: 2,
      category: "Ecommerce",
      price: 1378.2,
    },
    {
      id: 4,
      category: "productos",
      price: 420.7,
    }
  ];

  const onMouseOver = (data, index) => setActiveIndex(index);

  return (
    <>
           <section className={"expensesOverview"}>
               <ul>
                   <li className="card-row"><AiOutlineShoppingCart color="gray" fontSize={35} /><span className="title-home" > Ferreteria </span><span  className="title-home" >100</span></li>
                   <li className="card-row"> <AiOutlineShoppingCart color="gray" fontSize={35} /><span  className="title-home"  >Ecommerce </span> <span  className="title-home" >14</span> </li>
                   <li  className="card-row"> <AiOutlineShoppingCart color="gray" fontSize={35} /><span  className="title-home" >Productos </span> <span  className="title-home" >70</span></li>
               </ul>
            </section>
            <section className={"moneyOverview"}>
                <p className={"moneyOverviewTitle"}>Tus Servicios</p>
                <ul>
                {spendCategories.map((category) => (
                    <li key={category.id}>
                    <div className={"spendCategory"}>
                        <p className={"spendCategoryName"}>
                        {category.category}
                        </p>
                        <p className={"spendCategoryPrice"}>
                        {category.price.toFixed(2)}
                        </p>
                    </div>
                    <div className={"spendCategoryBar"}>
                        <div
                        style={{
                            width: `${
                            (category.price /
                                spendCategories.reduce(
                                (acc, current) => acc + current.price,
                                0
                                )) *
                            100
                            }%`,
                        }}
                        className={"spendCategoryColoredBar"}
                        ></div>
                    </div>
                    </li>
                ))}
                </ul>
          </section>
    </>
  );
}
