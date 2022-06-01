import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
const App = () => {
    return (
        <>
            <NavBar title="3DFactory" />
            <ItemListContainer greeting="Bienvenido!" />
            <Footer />
        </>
    );
};
export default App;