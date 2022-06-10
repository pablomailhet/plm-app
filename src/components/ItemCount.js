import {Container,Button,Card} from "react-bootstrap";
import {useState} from "react";
const ItemCount = ({stock,initial,onAdd}) => {
    const [cantidad,setCantidad] = useState(initial);
    const agregar = () => {
        if(cantidad<stock){
            setCantidad(cantidad+1);
        }
    }
    const quitar = () => {
        if(cantidad>1){
            setCantidad(cantidad-1);
        }
    }
    return (
        <>
            <Container className="pt-2">
                <Button variant="outline-success" onClick={quitar}>-</Button>
                <Container as="span" className="mx-2">Cantidad: {cantidad}</Container>
                <Button variant="outline-success" onClick={agregar}>+</Button>
            </Container>     
            <Container className="pt-2"> 
                <Button variant="primary" onClick={onAdd}>Add to cart</Button>
            </Container>                           
        </>
    );
};
export default ItemCount;