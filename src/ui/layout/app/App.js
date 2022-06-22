import { BrowserRouter } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Main from "../main/Main"
import Footer from "../footer/Footer";
import CartContext from "../../../api/context/CartContext";

const App = () => {
    return (
            <BrowserRouter>
                <CartContext>
                    <NavBar title="3DFactory" />
                    <Main />
                    <Footer />        
                </CartContext>
            </BrowserRouter>
    );
};
export default App;