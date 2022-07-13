import { Container, Alert } from "react-bootstrap";
import { collectionOrders } from "../../../api/firebase/firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";

import { cartContext } from "../../../api/context/CartContext";
import { useContext, useState } from "react";

import Loader from "../../widget/loader/Loader";
import CartDetail from "../cartdetail/CartDetail";
import CheckoutForm from "../checkoutform/CheckoutForm";

import { Link } from "react-router-dom";

const Checkout = () => {

    const objCartContext = useContext(cartContext);

    const [loading,setLoading] = useState(false);    
    const [idOrder,setIdOrder] = useState("");
    const [error,setError] = useState("");

    const saveOrder = (buyer) => {

        setLoading(true);

        const items = objCartContext.items.map((item) =>{
            return {
                    id: item.id, 
                    title: item.title,
                    price: item.price,
                    quantity: item.quantity,
                    subtotal: item.subtotal
            };
        });

        const orderData = {
            buyer: buyer,
            items: items,
            date: serverTimestamp(),
            total: objCartContext.precio_total
        };

        const promiseDocument = addDoc(collectionOrders,orderData);

        promiseDocument
            .then(result=>{
                setIdOrder(result.id);
                objCartContext.clear();
            })
            .catch(err=>{
                setError(err);
            })
            .finally(()=>{
                setLoading(false);
            }); 

    }

    return (
        <Container className="text-center p-3">
            {
                loading
                ?
                    <Loader />
                :
                    error===""
                    ?
                        idOrder===""
                        ?
                            objCartContext.items.length>0
                            ?
                                <>
                                    <CartDetail 
                                        items={objCartContext.items} 
                                        precio_total={objCartContext.precio_total}
                                        inCart={false} />
                                    <CheckoutForm onSubmit={saveOrder} />
                                </>
                            :
                                <Alert variant="warning">
                                    Carrito vacio... <Link to={"/"}>ir a productos</Link>
                                </Alert>

                        :
                            <Alert variant="success">
                                <p>Tu orden de compra fue exitosa!</p>
                                <p>Tu número compra es: {idOrder}</p>
                            </Alert>
                    :
                        <Alert variant="danger">
                            Se produjo un error ({error}) <Link to={"/cart"}>ir al cart</Link>
                        </Alert>
            }
        </Container>
    );

}
export default Checkout