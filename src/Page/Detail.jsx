import  React, { useState } from "react"
import {useParams} from "react-router-dom"
import { Items, } from "../Components/Data"
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Detailproduct =() =>{

    const {id} = useParams()

    const [index, setIndex] = useState(0);
    
    const result = Items.find(index => index.id ==id)

    if(!result) return null
    
    return (

        <div>       
            <div className="product-detail-container">
            <div>
            <div className="image-container">
                <img src={(result && result.imgSrc)} className="product-detail-image" />
                
            </div>
            <div className="small-images-container">
        
                <img 
                    src={result.imgSrc}
                    className={index ? 'small-image selected-image' : 'small-image'}

                />

            </div>
            </div>

            <div className="product-detail-desc">
            <h1>{result.name}</h1>
            <div className="reviews">
                <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                </div>
                <p>
                (20)
                </p>
            </div>
            <h4>Descripcion:</h4>
            <p>{result.description}</p>
            <p></p>
            <p className="price">${result.price}</p>
            <div className="quantity">
                <h3>Cantidad:</h3>
                <p className="quantity-desc">
                <span className="minus"  ><AiOutlineMinus /></span>
                <span className="num">{0} </span>
                <span className="plus" ><AiOutlinePlus /></span>
                </p>
            </div>
            <div className="buttons">
                <button type="button" className="add-to-cart" >Agregar al carrito</button>
                <button type="button" className="buy-now" >Compra nueva</button>
            </div>
            </div>
      </div>
      </div>

    )
}
export default Detailproduct