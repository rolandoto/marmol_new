import React, { useContext, useState } from "react"
import  AutoProvider from "../PrivateRoute/AutoProvider"
import LoginService from "../Service/LoginService"
import {useHistory} from "react-router-dom"
import { Loading } from "@nextui-org/react";

const Login =() =>{

    const {setJwt} =useContext(AutoProvider)

    const [email,setEmail] =useState()
    const [password,setPassword] =useState()

    const history = useHistory()

    const [state,setState] =useState({loading:false,error:false})

    const handSubmit =(e) =>{
        e.preventDefault()
        setState({loading:true})
        LoginService({email,password}).then(index=>{
            setJwt(index)
            sessionStorage.setItem("jwt",JSON.stringify(index))
            setTimeout(() =>{
                setState({loading:false})
                history.push("/")
            },3000)
        }).catch(e =>{
            setState({error:true})
            console.log(e)
        })
    }

    return (
        <div className='App-login'>
                <div>
                    <div className='container-img'>
                            <div>
                                <img className='image-login' src="https://ciudadenredsas.info/mademarmol/wp-content/uploads/sites/42/2019/05/logo-final-1.png" alt="logo" />
                            </div>
                            <form className='form-login' onSubmit={handSubmit}  >
                                    <input required 
                                        placeholder='Nombre de usuario'         
                                        type='text'        
                                        className='username' 
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email} 
                                         />    
                                    <input 
                                        required 
                                        placeholder='Contraseña'  
                                        type='password'  
                                        className='password'  
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                         />
                                <button className='button-login' type='submit' >{state.loading ? <Loading type="spinner" size="lg" /> : <span>iniciar sesion </span> } </button>
                            </form> 
                        </div>
                        {state.error && <span style={{color:'red'}} >Error de Credenciales</span>}
                </div>     
        </div>
    )

}

export default Login