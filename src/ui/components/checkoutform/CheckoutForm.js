import {Container,Form, Button} from "react-bootstrap";

import { useState } from "react"

const CheckoutForm = ({onSubmit}) => {

    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(buyer);
    };

    const handleChange = (e) => {
        setBuyer({ ...buyer, [e.target.id] : e.target.value})
    };

    return (
        <Container className="text-left p-3 border">

            <Container className="text-center">
                <h5>Completar datos del comprador</h5>
            </Container>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={handleChange} type="text" required placeholder="Ingrese un nombre..." value={buyer.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleChange} type="email" required placeholder="Ingrese un email..." value={buyer.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control onChange={handleChange} type="text" required placeholder="Ingrese un telefono..." value={buyer.phone} />
                </Form.Group>

                <Container className="text-center p-1">
                    <Button variant="primary" type="submit">Enviar compra</Button>
                </Container>

            </Form>

        </Container>
    )
}

export default CheckoutForm