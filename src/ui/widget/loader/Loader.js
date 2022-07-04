import {Spinner, Container} from "react-bootstrap";
const Loader = () => {
    return (
        <Container className="text-center p-3">
            <Spinner animation="border" variant="success" />
        </Container>
    )
}
export default Loader