import React, { useState } from "react"
import UploaService from "../Service/UploadService";

const UploadProducts =() =>{

    const [image, setImage] = useState(null);
    const [upladingImg, setUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const [name,setName] =useState()
    const [code,SetCode] = useState()
    const [stock,setStock]= useState()
    const [price,setPrice] =useState()

    function validateImg(e) {
        const file = e.target.files[0];
        if (file.size >= 1048576) {
            return alert("Max file size is 1mb");
        } else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    const handclick =() =>{
        const  form = new FormData(); 
        form.append("image",image)
        form.append("name",name)
        form.append("code",code)
        form.append("stock",stock)
        form.append("price",price)
        
        UploaService({form}).then(index =>{
            alert("se ha guardado correctament")
            setName("")
            SetCode("")
            setStock("")
            setPrice("")
            setUploadingImg("")
        }).catch(e =>{
            console.log(e)
        })
    }

    return (
        <div className="ro" >
                <h1 className="title-product" >subir producto</h1>
            <div className="flo" >
                <div className="signup-profile-pic__container"  >
                        <img
                        src={imagePreview || "https://raw.githubusercontent.com/learnthiscode/mern-chat-frontend/4525dab83af325332fa6757a3c707e171c51b893/src/assets/bot.jpeg"}
                        className="signup-profile-pic"
                    />
                    <label htmlFor="image-upload" className="image-upload-label">
                        <i className="fas fa-plus-circle add-picture-icon">+</i>
                    </label>
                        <input
                            type="file"
                            id="image-upload"
                            hidden
                            accept="image/png, image/jpeg"
                            onChange={validateImg}
                        />  
                </div>
        <div className="col89" >
                
                <div class="rows">
                    <div class="">
                        <div class="input_item" > 
                            <input aria-invalid="false" 
                                    type="text" 
                                    name="sparePartCode" 
                                    class="product-input" 
                                    placeholder="Codigo del producto"
                                    value={code}
                                    onChange={(e) => SetCode(e.target.value)} />
                        </div>
                    </div>
            </div>
            <div class="rows">
                    <div class="">
                        <div class="input_item" > 
                            <input aria-invalid="false"
                                    type="text" 
                                    name="sparePartCode"
                                     class="product-input"
                                      placeholder="Nombre del product"
                                      value={name}
                                      onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
            </div>
            <div class="rows">
                    <div class="">
                        <div class="input_item" > 
                            <input aria-invalid="false"
                                    type="number" 
                                    name="sparePartCode" 
                                    class="product-input" 
                                    placeholder="Precios del producto"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)} />
                        </div>
                    </div>
            </div>
            <div class="rows">
                    <div class="">
                        <div class="input_item" > 
                            <input aria-invalid="false"
                                    type="number" 
                                    name="sparePartCode" 
                                    class="product-input"
                                    placeholder="Stock del product" 
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}/>
                        </div>
                    </div>
            </div>
        
        </div>
        </div> 

        <div>
        </div> 

        <div>   
            <button className="button-product" onClick={handclick} >Guardar producto</button>
        </div>

    </div>
    )
}

export default UploadProducts