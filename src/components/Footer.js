import {Container,Row,Col} from "react-bootstrap";
const Footer = () => {
    return (
        <Container as="footer">
            <Row>
                <Col>
                    <Container className="text-center p-3">
                        &copy; {(new Date().getFullYear())} <b><color className="text-success">3D</color>Factory</b>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};
export default Footer;