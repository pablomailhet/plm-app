import {Container,Row} from "react-bootstrap";
import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import {products} from "../../../assets/Products";

import Loader from "../../widget/loader/Loader";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item,setItem] = useState({});

    const [loaded,setLoaded] = useState(false);

    const {itemId} = useParams();

    useEffect(()=>{
        const getItem = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(products.find((product) => {
                    return product.id == itemId;
                }));
            },500);
        });
        getItem.then(resolve=>{
            setLoaded(true);
            setItem(resolve);
        });            
    },[itemId])    

    return (
        <Container className="text-center p-3">
            <Row className="align-items-center">
                {loaded ? item !==undefined ? <ItemDetail item={item} /> : <h3>Producto no encontrado...</h3> : <Loader />}
            </Row>
        </Container>
    )
}
export default ItemDetailContainer