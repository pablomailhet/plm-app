import {Container} from "react-bootstrap";
import CartWidget from "../../../ui/components/cartWidget/CartWidget";
import {navBarLinks} from "../../../assets/NavBarLinks";
import { Link,NavLink } from "react-router-dom";

const NavBar = ({title}) => {
    return (
        <Container as="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <img src="/img/logo.png" alt={title} height={56} />
                </Link>
                <div id="navbarText" className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        {
                            navBarLinks.map((item,index) =>{
                                return (
                                    <li key={index} className="nav-item active">
                                        <NavLink to={item.url} className={item.cName}>{item.title}</NavLink>
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