import {Card,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
const Item = ({item}) => {
    return (
      <Card className="col-md-3 mx-3 my-3">
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Link to={"/item/" + item.id}>
              <img alt={item.title} src={item.pictureUrl} height={100} />
            </Link>
            <Card.Text><b>$ {item.price}</b></Card.Text>
            <Link to={"/item/" + item.id}>
              <Button variant="secondary">Details</Button>
            </Link>
        </Card.Body>
      </Card>
    )
}
export default Item