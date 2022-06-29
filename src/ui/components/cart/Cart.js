import { Button, Container, Row, Col} from "react-bootstrap";
import { useContext } from "react";
import { cartContext } from "../../../api/context/CartContext";
import {Link} from "react-router-dom";
const Cart = () => {

    const objCartContext = useContext(cartContext);

    const removeItem = (e) => {
        objCartContext.removeItem(e.target.id);
    };

    const clear = (e) => {
        objCartContext.clear();
    };    

    if(objCartContext.items.length>0){
        return (
            <Container className="text-center p-3">

                <Row className="bg-light align-items-center">
                    <Col>
                        Articulo
                    </Col>
                    <Col lg="2">
                        Cantidad
                    </Col>
                    <Col lg="2">
                        Precio
                    </Col>     
                    <Col lg="2">
                        Subtotal
                    </Col>                                                                                 
                    <Col lg="2">
                        
                    </Col>                                                                                 
                </Row>

                {
                    objCartContext.items.map((item,key) =>{
                        return( 
                        <Row key={key} className="mt-2 mb-2 align-items-center">
                            <Col>
                                <Link to={"/item/" + item.id}>
                                    <img src={item.pictureUrl} height={100} />
                                </Link>
                            </Col>
                            <Col lg="2">
                                {item.quantity}
                            </Col>
                            <Col lg="2">
                                ${item.price}
                            </Col>     
                            <Col lg="2">
                                ${item.subtotal}
                            </Col>                                                                                 
                            <Col lg="2">
                                <Button id={item.id} variant="outline-danger" onClick={removeItem}>Quitar</Button>
                            </Col>                                                                                 
                        </Row>
                        );
                    })
                }

                <Row className="bg-light align-items-center">
                    <Col>
                        TOTALES
                    </Col>
                    <Col lg="2"> 
                        {objCartContext.cantidad_total}
                    </Col>
                    <Col lg="2">
                        
                    </Col>     
                    <Col lg="2">
                        ${objCartContext.precio_total}
                    </Col>                                                                                 
                    <Col lg="2">
                        <Button variant="outline-danger" onClick={clear}>Vaciar carrito</Button>
                    </Col>                                                                                 
                </Row>
                
            </Container>        
    
        );
    }
    else{
        return (
            <Container className="text-center p-3">
                <h3>
                    Carrito vacio... <Link to={"/"}>ir a productos</Link>
                </h3>
            </Container>
        );
    }

}
export default Cart