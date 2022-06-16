import {Container,Row} from "react-bootstrap";
import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import {products} from "../../../assets/Products";

import { useParams } from "react-router-dom";
import Loader from "../../widget/loader/Loader";

const ItemListContainer = () => {

    const [items,setItems] = useState([]);
    const [loaded,setLoaded] = useState(false);    

    const {categoryId} = useParams();

    useEffect(()=>{
        setLoaded(false);
        const task = new Promise((resolve)=>{
            setTimeout(()=>{
                if(categoryId === undefined){
                    resolve(products);
                }
                else{
                    resolve(products.filter((item)=>{
                        return item.categoryId===categoryId;
                    })); 
                }
            },1000);
        });
        task.then(resolve=>{
            setLoaded(true);
            setItems(resolve);
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