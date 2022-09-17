import React,{useCallback, useState} from "react"
import Expenses from "../Components/Expenses";
import Sidebar from "../Components/Sidebar";
import UploaService from "../Service/UploadService";
import {Route} from "react-router-dom"
import "./../styles/home.css"
const Home =() =>{

    const [myimage, setMyImage] = useState(null);

    const [state,setState] = useState({loading:false,error:false})
    const [image,setImage] = useState(null)

    const uploadImage = e => {
        setMyImage(e.target.files[0]);
      };

      const hanImagePerson = useCallback(({form}) =>{
        UploaService({form}).then(index =>{
            setImage(index)
            console.log(index)
        }).catch(e =>{
            console.log(e)
        })
    })

    const [sparePartCode,setsparePartCode] =useState()
    const [price,setprice] =useState()
    const [stock,setstock]=useState()
    const [name,setName] =useState()

    const hanSubmitUploadImage =(e) =>{
        e.preventDefault()
        const  form = new FormData(); 
        form.append('image',myimage)
        hanImagePerson({form}) 
    }
    
    return (
        <>
            <Expenses />
        </>
    )
}
export default Home 