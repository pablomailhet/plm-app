import {Container,Row} from "react-bootstrap";
import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";

import Loader from "../../widget/loader/Loader";

import { useParams } from "react-router-dom";

import { collectionProducts } from "../../../api/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [item,setItem] = useState({});

    const [loaded,setLoaded] = useState(false);

    const {itemId} = useParams();

    useEffect(()=>{

        const documentReference = doc(collectionProducts,itemId);
        getDoc(documentReference)
            .then((response)=>{
                response.exists() ? setItem({id:response.id, ...response.data()}) : setItem(undefined)
                setLoaded(true);
            })
            .catch((error)=>{
                setItem(undefined);
                setLoaded(true);
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