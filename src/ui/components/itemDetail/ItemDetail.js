import {Card,Button} from "react-bootstrap";
import ItemCount from "../itemCount/ItemCount";
import {useState} from "react";
import {Link} from "react-router-dom";
const ItemDetail = ({item}) => {

    const [quantity,setQuantity] = useState(0);

    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd);
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
                        <Link to={"/cart"}>
                            <Button variant="primary">Terminar mi compra</Button>
                        </Link> 
                        : 
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                }
            </Card.Body>
        </Card>        
    )
}
export default ItemDetail