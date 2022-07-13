import {Row, Col, Button} from "react-bootstrap";

import {Link} from "react-router-dom";

const CartDetail = ({items,precio_total,removeItem,clear,inCart}) => {

    return (

        <>

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
                {                                                                              
                    inCart
                    ?
                        <Col lg="2">
                            
                        </Col>                                                                                 
                    :
                        ''
                }
            </Row>

            {
                items.map((item,key) =>{
                    return( 
                        <Row key={key} className="mt-2 mb-2 align-items-center">
                            <Col>
                                <Link to={inCart ? "/item/" + item.id : '#'} className={inCart ? '' : 'pe-none'}>
                                    <img alt={item.title} src={item.pictureUrl} height={100} />
                                </Link>                            
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
                            {
                                inCart
                                ?
                                    <Col lg="2">
                                        <Button id={item.id} variant="outline-danger" onClick={removeItem}>Quitar</Button>
                                    </Col>                                                                                 
                                :
                                    ''
                            }
                        </Row>
                    );
                })
            }

            <Row className="bg-light mb-5 align-items-center">
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
                {
                    inCart
                    ?
                        <Col lg="2">                        
                            <Button variant="outline-danger" onClick={clear}>Vaciar carrito</Button>
                        </Col>                                                                                 
                    :
                        ''
                }
            </Row>

        </>

    );

};

export default CartDetail