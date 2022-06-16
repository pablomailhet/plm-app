import { BrowserRouter } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Main from "../main/Main"
import Footer from "../footer/Footer";
const App = () => {
    return (
        <BrowserRouter>
            <NavBar title="3DFactory" />
            <Main />
            <Footer />        
        </BrowserRouter>
    );
};
export default App;