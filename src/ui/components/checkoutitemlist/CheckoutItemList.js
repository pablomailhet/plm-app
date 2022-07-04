import {Container, Row, Col} from "react-bootstrap";

const CheckoutItemList = ({items,cantidad_total,precio_total}) => {

    return (
        <Container className="text-center p-3">

            <Row className="bg-light align-items-center">
                <Col>

                </Col>                
                <Col>
                    Articulo
                </Col>
                <Col lg="2">
                    Precio unit.
                </Col>                                
                <Col lg="2">
                    Cantidad
                </Col>

                <Col lg="2">
                    Subtotal
                </Col>                                                                                 
            </Row>

            {
                items.map((item,key) =>{
                    return( 
                    <Row key={key} className="mt-2 mb-2 align-items-center">
                        <Col>
                            <img src={item.pictureUrl} height={100} />
                        </Col>                        
                        <Col>
                            {item.title}
                        </Col>
                        <Col lg="2">
                            ${item.price}
                        </Col>                                     
                        <Col lg="2">
                            {item.quantity}
                        </Col>
                        <Col lg="2">
                            ${item.subtotal}
                        </Col>                                                                                 
                    </Row>
                    );
                })
            }

            <Row className="align-items-center">
                <Col>

                </Col>                
                <Col>

                </Col>
                <Col lg="2"> 
                    
                </Col>
                <Col lg="2">

                </Col>     
                <Col lg="2">
                    <h5>Total ${precio_total}</h5>
                </Col>                                                                                 
            </Row>

        </Container> 

    )
}

export default CheckoutItemList