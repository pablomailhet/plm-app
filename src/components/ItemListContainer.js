import {Container,Row,Col} from "react-bootstrap";
const ItemListContainer = (props) => {
    return (
        <Container as="main" className="text-center p-3">
            <Row className="align-items-center">
                <Col>
                    <Container className="text-center p-3">
                        <h3>{props.greeting}</h3>
                    </Container>                
                </Col>
            </Row>
        </Container>
    );
};
export default ItemListContainer;