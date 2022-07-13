import {Container,Row, Alert} from "react-bootstrap";
import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";

import { useParams } from "react-router-dom";
import Loader from "../../widget/loader/Loader";

import { collectionProducts } from "../../../api/firebase/firebase";
import {getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [loaded,setLoaded] = useState(false);
    const [items,setItems] = useState([]);
    const [error,setError] = useState("");

    const {categoryId} = useParams();

    useEffect(()=>{
        setLoaded(false);

        const promiseQuery = getDocs(categoryId ? query(collectionProducts, where("categoryId","==",categoryId)) : collectionProducts);

        promiseQuery
            .then((response)=>{
                const products = response.docs.map(reference=>{
                    return {id:reference.id, ...reference.data()};
                });
                setItems(products);
            })
            .catch((err)=>{
                setError(err);
                setItems([]);
            })
            .finally(()=>{
                setLoaded(true);
            });             

    },[categoryId]);
    
    return (
        <Container className="text-center p-3">
            <Row>
                {
                    loaded 
                    ?
                        error===""
                        ?
                            items.length>0 
                            ? 
                                <ItemList items={items} /> 
                            : 
                                <Alert variant="warning">
                                    Sin productos...
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
    );
};

export default ItemListContainer;