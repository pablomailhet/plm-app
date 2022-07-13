import {Container,Row, Alert} from "react-bootstrap";
import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";

import Loader from "../../widget/loader/Loader";

import { useParams } from "react-router-dom";

import { collectionProducts } from "../../../api/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [loaded,setLoaded] = useState(false);
    const [item,setItem] = useState({});
    const [error,setError] = useState("");

    const {itemId} = useParams();

    useEffect(()=>{

        const documentReference = doc(collectionProducts,itemId);
        
        getDoc(documentReference)
            .then((response)=>{
                response.exists() ? setItem({id:response.id, ...response.data()}) : setItem(undefined)
            })
            .catch((err)=>{
                setError(err);
                setItem(undefined);
            })
            .finally(()=>{
                setLoaded(true);
            });            

    },[itemId])    

    return (
        <Container className="text-center p-3">
            <Row className="align-items-center">
                {
                    loaded 
                    ? 
                        error===""
                        ?
                            item !==undefined 
                            ? 
                                <ItemDetail item={item} /> 
                            : 
                                <Alert variant="warning">
                                    Producto no encontrado...
                                </Alert>                                
                        :
                            <Alert variant="danger">
                                Se produjo un error ({error})
                            </Alert>                        
                    : 
                        <Loader />
                }
            </Row>
        </Container>
    )
}
export default ItemDetailContainer