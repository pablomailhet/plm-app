import { Button, Container, Alert } from "react-bootstrap";
import { useContext } from "react";
import { cartContext } from "../../../api/context/CartContext";
import { Link } from "react-router-dom";

import CartDetail from "../cartdetail/CartDetail";

const Cart = () => {

    const objCartContext = useContext(cartContext);

    const removeItem = (e) => {
        objCartContext.removeItem(e.target.id);
    };

    const clear = (e) => {
        objCartContext.clear();
    };    

    return (
        
        <Container className="text-center p-3">
            {
                objCartContext.items.length>0
                ?
                    <>
                        <CartDetail 
                            items={objCartContext.items} 
                            precio_total={objCartContext.precio_total} 
                            removeItem={removeItem} 
                            clear={clear}
                            inCart={true} />

                        <Container className="text-center p-3">
                            <Link to={"/checkout"}>
                                <Button variant="primary">Checkout</Button>
                            </Link>                
                        </Container> 
                    </>
                :
                    <Alert variant="warning">
                        Carrito vacio... <Link to={"/"}>ir a productos</Link>
                    </Alert>                
            }
        </Container>

    );

}
export default Cart