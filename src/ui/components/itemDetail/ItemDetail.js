import {Card} from "react-bootstrap";
import ItemCount from "../itemCount/ItemCount";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import { cartContext } from "../../../api/context/CartContext";

const ItemDetail = ({item}) => {

    const navigate = useNavigate();

    const objCartContext = useContext(cartContext);

    const onAdd = (quantityToAdd) => {
        objCartContext.addItem(item,quantityToAdd);
        navigate("/cart");        
    }

    return (
        <Card className="col-md mx-4 my-4">
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <img alt={item.title} src={item.pictureUrl} height={300} />
                <Card.Text className="pt-2">{item.description}</Card.Text>
                <Card.Text><b>$ {item.price}</b></Card.Text>
                <ItemCount stock={item.stock} initial={objCartContext.getSelectedCount(item.id)} onAdd={onAdd} />
            </Card.Body>
        </Card>        
    )
}
export default ItemDetail