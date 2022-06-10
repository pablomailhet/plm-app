import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer";
const App = () => {
    return (
        <>
            <NavBar title="3DFactory" />
            <ItemListContainer greeting="Airplanes" />
            <ItemDetailContainer />
            <Footer />
        </>
    );
};
export default App;