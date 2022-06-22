import {Container,Row,Col} from "react-bootstrap";
const Footer = () => {
    return (
        <Container as="footer">
            <Row>
                <Col>
                    <Container className="text-center p-3">
                        {(new Date().getFullYear())} <b className="text-success">3D</b><b>Factory</b>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};
export default Footer;