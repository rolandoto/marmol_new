import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Header from "./Components/Header";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Detailproduct from "./Page/Detail";
import Favorite from "./Page/Favorite";
import Home from "./Page/Home";

const App = () => {

    return (
      <BrowserRouter>
      <Header />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/DetailProduct/:id" component={Detailproduct} /> 
              <Route exact path="/Favorite" component={Favorite} />
              <Route exact path="/Home"  component={Home}  />
            </Switch>
      </BrowserRouter>
    )
}

export default App