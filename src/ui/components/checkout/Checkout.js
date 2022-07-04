import { Container } from "react-bootstrap";
import { collectionOrders } from "../../../api/firebase/firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";

import { cartContext } from "../../../api/context/CartContext";
import { useContext, useState } from "react";

import Loader from "../../widget/loader/Loader";
import CheckoutItemList from "../checkoutitemlist/CheckoutItemList";
import CheckoutForm from "../checkoutform/CheckoutForm";

import { Link } from "react-router-dom";

const Checkout = () => {

    const objCartContext = useContext(cartContext);

    const [idOrder,setIdOrder] = useState("");
    const [loading,setLoading] = useState(false);

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
                setLoading(false);
            })
            .catch(error=>{
                console.log(error);
            });

    }

    return (
        <>
            {
                loading
                ?
                    <Loader />
                :
                    idOrder==""
                    ?
                        objCartContext.items.length>0
                        ?
                            <>
                                <CheckoutItemList items={objCartContext.items} cantidad_total={objCartContext.cantidad_total} precio_total={objCartContext.precio_total} />
                                <CheckoutForm onSubmit={saveOrder} />
                            </>
                        :
                            <Container className="text-center p-3">
                                <h3>
                                    Carrito vacio... <Link to={"/"}>ir a productos</Link>
                                </h3>
                            </Container>
                    :
                        <Container className="text-center p-3">
                            <p>Tu orden de compra fue exitosa!</p>
                            <p>Tu número compra es: {idOrder}</p>
                        </Container>
            }
        </>
    );

}
export default Checkout