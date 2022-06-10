import {Container,Row,Col} from "react-bootstrap";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {productos} from "./Productos";
const ItemDetailContainer = () => {

    const [item,setItem] = useState({});

    useEffect(()=>{
        console.log("2.1_Cargando producto...")

        const getItem = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let item = productos[2];
                resolve(item);
            },3000);
        });
        getItem.then(resolve=>{
            console.log("2.2_Producto cargado...");
            setItem(resolve);
        }).catch(reject=>{
            console.log(reject);
        });            

    },[])    

    return (
        <Container className="text-center p-3">
            <Row className="align-items-center">
                <Col>
                    <Container className="text-center p-3 text-success">
                        {Object.keys(item).length>0 ? <h3>Detalle</h3> : <h3>Cargando Detalle...</h3>}
                    </Container>
                </Col>
            </Row>
            <Row>
                {Object.keys(item).length>0 ? <ItemDetail item={item} /> : ''}
            </Row>
        </Container>
    )

}
export default ItemDetailContainer