import {Container,Button,Card} from "react-bootstrap";
import ItemCount from "./ItemCount";
const Item = ({item}) => {
    return (
      <Card className="col-md-3 mx-3 my-3">
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <img src={item.pictureUrl} style={{height: "120px"}} />
            <Card.Text className="pt-2">{item.description}</Card.Text>
            <Card.Text><b>$ {item.price}</b></Card.Text>
        </Card.Body>
      </Card>
    )
}
export default Item