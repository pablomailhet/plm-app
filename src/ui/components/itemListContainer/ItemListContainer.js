import {Container,Row} from "react-bootstrap";
import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";

import { useParams } from "react-router-dom";
import Loader from "../../widget/loader/Loader";

import { collectionProducts } from "../../../api/firebase/firebase";
import { getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [items,setItems] = useState([]);
    const [loaded,setLoaded] = useState(false);

    const {categoryId} = useParams();

    useEffect(()=>{
        setLoaded(false);

        let promiseQuery = undefined;

        if(categoryId == undefined){
            promiseQuery = getDocs(collectionProducts);
        }   
        else{
            const q = query(collectionProducts, where("categoryId","==",categoryId));
            promiseQuery = getDocs(q);
        }     

        promiseQuery
            .then((response)=>{
                const products = response.docs.map(reference=>{
                    return {id:reference.id, ...reference.data()};
                });
                setLoaded(true);
                setItems(products);
            })
            .catch((error)=>{
                setLoaded(true);
                setItems([]);
            });

    },[categoryId]);
    
    return (
        <Container className="text-center p-3">
            <Row>
                {loaded ? items.length>0 ? <ItemList items={items} /> : <h3>Sin productos...</h3> : <Loader />}
            </Row>
        </Container>
    );
};
export default ItemListContainer;