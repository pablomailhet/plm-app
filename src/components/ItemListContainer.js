import { useState, useEffect } from "react";
import {Container,Row,Col} from "react-bootstrap";
import ItemList from "./ItemList";
import {productos} from "./Productos";
const ItemListContainer = (props) => {

    const [items,setItems] = useState([]);

    useEffect(()=>{
        console.log("Cargando productos...")

        const task = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(productos);
            },1000);
        });
        task.then(resolve=>{
            console.log("Productos cargados...");
            setItems(resolve);
        }).catch(reject=>{
            console.log(reject);
        });            

    },[])

    return (
        <Container as="main" className="text-center p-3">
            <Row className="align-items-center">
                <Col>
                    <Container className="text-center p-3 text-success">
                        <h3>{props.greeting}</h3>
                    </Container>
                </Col>
            </Row>
            <Row>
                {items.length>0 ? <ItemList items={items} /> : 'Cargando...'}
            </Row>
        </Container>
    );
};
export default ItemListContainer;