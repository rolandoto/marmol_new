import React,{useState} from "react"

const AutoContext = React.createContext({})

export const AutoProvider =({children}) =>{

    const [jwt,setJwt] =useState(
        () => JSON.parse(sessionStorage.getItem("jwt"))
    )

    return (
        <AutoContext.Provider value={{jwt,setJwt}}  >
            {children}
        </AutoContext.Provider>
    )
}

export default AutoContext


