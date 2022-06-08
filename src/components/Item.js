import {Container,Button,Card} from "react-bootstrap";
const Item = ({item,onAdd}) => {
    return (
      <Card className="col-md-3 mx-3 my-3">
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <img src={item.pictureUrl} style={{height: "120px"}} />
            <Card.Text className="pt-2">{item.description}</Card.Text>
            <Card.Text><b>$ {item.price}</b></Card.Text>
            <Container className="pt-2"> 
                <Button variant="primary" onClick={onAdd}>Add to cart</Button>
            </Container>                            
        </Card.Body>
      </Card>      
    )
}
export default Item