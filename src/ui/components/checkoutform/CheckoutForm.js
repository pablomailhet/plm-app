import {Container,Form, Button, Alert} from "react-bootstrap";

import { useState } from "react"

const CheckoutForm = ({onSubmit}) => {

    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
        c_email: ""
    });

    const [error,setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(buyer.email===buyer.c_email){
            const {c_email, ...newBuyer} = buyer;
            onSubmit(newBuyer);
        }
        else{
            setError("Error al confirmar el campo email.");
            setBuyer({ ...buyer, "c_email" : ""});
        }
    };

    const handleChange = (e) => {
        if(error!==""){
            setError("");
        }
        setBuyer({ ...buyer, [e.target.id] : e.target.value});
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

                <Form.Group className="mb-3" controlId="c_email">
                    <Form.Label>Confirmar Email</Form.Label>
                    <Form.Control onChange={handleChange} type="email" required placeholder="Confirme su email..." value={buyer.c_email} />
                </Form.Group>                
                {
                    error!==""
                    ?
                        <Alert variant="danger">
                            {error}
                        </Alert>                         
                    :
                        ''
                }
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