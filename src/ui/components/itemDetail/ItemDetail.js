import {Card,Button} from "react-bootstrap";
import ItemCount from "../itemCount/ItemCount";
import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";

import { cartContext } from "../../../api/context/CartContext";

const ItemDetail = ({item}) => {

    let navigate = useNavigate();

    const objCartContext = useContext(cartContext);

    const [quantity,setQuantity] = useState(0);

    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd);
    }

    const addToCart = () => {
        objCartContext.addItem(item,quantity);
        navigate("/cart");
    }

    return (
        <Card className="col-md mx-4 my-4">
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <img src={item.pictureUrl} height={300} />
                <Card.Text className="pt-2">{item.description}</Card.Text>
                <Card.Text><b>$ {item.price}</b></Card.Text>
                {
                    quantity > 0 ? 
                        <Button variant="primary" onClick={addToCart}>Terminar mi compra</Button>
                        : 
                        <ItemCount stock={item.stock} initial={item.quantity ? item.quantity : 1} onAdd={onAdd} />
                }
            </Card.Body>
        </Card>        
    )
}
export default ItemDetail