import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import ContainerExpenses from "./Components/ContainerExpenses";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Sidebar from "./Components/Sidebar";
import Configurations from "./Page/Configuration";
import Detailproduct from "./Page/Detail";
import Ecommerce from "./Page/Ecommerce";
import Favorite from "./Page/Favorite";
import Ferreteria from "./Page/Ferreteria";
import FoodDetails from "./Page/FoodDetail";
import Home from "./Page/Home";
import HomeMain from "./Page/HomeMain/HomeMain";
import HomeUser from "./Page/HomeUser/HomeUser";
import Login from "./Page/Login";
import Material from "./Page/Material";
import Products from "./Page/Produts";
import UploadProducts from "./Page/UploadProducts";
import { AutoProvider } from "./PrivateRoute/AutoProvider";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";


const To =() =>{
  return (
    <h1>asdasd</h1>
  )
}

const App = () => {

  const user  ="user"
  
  if(user =="user"){
    return (
      <BrowserRouter>
        <AutoProvider>
            <Header />
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/" component={HomeUser} />
                  <Route exact path="/DetailProduct/:id" component={Detailproduct} /> 
                  <Route exact path="/Favorite" component={Favorite} />
                  <Route exact path="/Material" component={Material} />
                  <Route exact path="/Login"  component={Login}  />
                  <Route path="/foods/:id" component={FoodDetails} />
                </Switch>
        </AutoProvider>
      </BrowserRouter>
    )
  }else if (user=="admin"){
    return (
      <BrowserRouter>
        <AutoProvider>
        <Sidebar/>
            <Switch>
              <ContainerExpenses>
                <Route exact path="/home"  component={Home}  />
                <Route exact path="/main" component={To} />
                <Route exact path="/ferreteria" component={Ferreteria} />
                <Route exact path="/ecommerce" component={Ecommerce} />
                <Route exact path="/productos" component={Products} />
                <Route exact path="/subir productos" component={UploadProducts} />
                <Route exact path="/configuracion" component={Configurations} />
              </ContainerExpenses>
            </Switch>
        </AutoProvider>
    </BrowserRouter>
    )
  }
}
export default App