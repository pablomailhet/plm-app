import {Container,Row,Col} from "react-bootstrap";
import CartWidget from "./CartWidget";
const NavBar = (props) => {
    return (
        <Container as="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="logo.png" alt={props.title} height="56" />
                </a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Airplanes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">UAV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cars</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Boats</a>
                        </li>                        
                    </ul>
                </div>
                <span className="navbar-text">
                    <CartWidget />
                </span>                
            </nav>
        </Container>
    );        
};
export default NavBar;