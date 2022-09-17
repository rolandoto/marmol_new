import React, { useContext } from "react"
import {Route,Redirect} from "react-router-dom"
import  AutoProvider  from "./AutoProvider"

export const PrivateRoute =({component:RouteComponent,...rest}) =>{

    const {jwt} = useContext(AutoProvider)
    
    return (
        <Route {...rest} 
          render={routerPros =>
            !!jwt ? (
                <RouteComponent {...routerPros}  />
            ):
            (
            <Redirect to="/login" />
            )
          }    />
    )
}

