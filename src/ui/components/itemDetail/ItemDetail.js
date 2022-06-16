import {Card} from "react-bootstrap";
import ItemCount from "../itemCount/ItemCount";
const ItemDetail = ({item}) => {

    const onAdd = () => {

    }

    return (
        <Card className="col-md mx-4 my-4">
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <img src={item.pictureUrl} height={300} />
                <Card.Text className="pt-2">{item.description}</Card.Text>
                <Card.Text><b>$ {item.price}</b></Card.Text>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </Card.Body>
        </Card>        
    )
}
export default ItemDetail