import { useState, useEffect } from "react";
import {Container,Row,Col} from "react-bootstrap";
import ItemList from "./ItemList";
import {productos} from "./Productos";
const ItemListContainer = (props) => {

    const [items,setItems] = useState([]);

    useEffect(()=>{
        console.log("1.1_Cargando productos...")

        const task = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(productos);
            },2000);
        });
        task.then(resolve=>{
            console.log("1.2_Productos cargados...");
            setItems(resolve);
        }).catch(reject=>{
            console.log(reject);
        });            

    },[])

    return (
        <Container className="text-center p-3">
            <Row className="align-items-center">
                <Col>
                    <Container className="text-center p-3 text-success">
                        {items.length>0 ? <h3>{props.greeting}</h3> : <h3>Cargando {props.greeting}...</h3>}
                    </Container>
                </Col>
            </Row>
            <Row>
                {items.length>0 ? <ItemList items={items} /> : ''}
            </Row>
        </Container>
    );
};
export default ItemListContainer;