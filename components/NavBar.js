import {Container,Row,Col} from "react-bootstrap";
import CartWidget from "./CartWidget";
import {NavBarLinks} from "./NavBarLinks";
const NavBar = ({title,links}) => {

    return (
        <Container as="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="logo.png" alt={title} height="56" />
                </a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {
                            NavBarLinks.map((item,index) =>{
                                return (
                                    <li key={index} className="nav-item active">
                                        <a className={item.cName} href={item.url}>{item.title}</a>
                                    </li>                                    
                                )
                            })
                        }
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