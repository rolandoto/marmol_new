import React ,{useEffect, useState} from "react"
import products from "../Components/dataProduct";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import ProductCard from "../UI/ProductCard";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./material.css";


const Material =() =>{

    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);

  
      useEffect(() => {
        if (category === "ALL") {
          setAllProducts(products);
        }
    
        if (category === "BURGER") {
          const filteredProducts = products.filter(
            (item) => item.category === "Quartz"
          );
    
          setAllProducts(filteredProducts);
        }
    
        if (category === "PRUEBA") {
          const filteredProducts = products.filter(
            (item) => item.category === "Chroche"
          );
    
          setAllProducts(filteredProducts);
        }
    
        if (category === "GRANITO_EXOTICOS") {
          const filteredProducts = products.filter(
            (item) => item.category === "Granitos exoticos"
          );
    
          setAllProducts(filteredProducts);
        }
    
        if (category === "QUARTONE") {
          const filteredProducts = products.filter(
            (item) => item.category === "Quartone"
          );
            
        
          
          setAllProducts(filteredProducts);
        }
        if (category === "SINTERIZADOS") {
          const filteredProducts = products.filter(
            (item) => item.category === "Sinterizados"
          );
            
        
          
          setAllProducts(filteredProducts);
        }
      }, [category]);
    

 
    return (
        <>
        
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Productos populaes en Mademarmol</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  Todos
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                 
                 Mármol
                </button>


                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "CHROCHE" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("CHROCHE")}
                >
                  Granitos
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "GRANITO_EXOTICOS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("GRANITO_EXOTICOS")}
                >
                  Granitos exóticos
                </button>


                

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "QUARTONE" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("QUARTONE")}
                >
                  Quarztone
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "SINTERIZADOS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("SINTERIZADOS")}
                >
                  Piedra sinterizados
                </button>

              </div>
            </Col>

              {allProducts?.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
        </Container>
      </section>
        </>
    )
}

export default Material