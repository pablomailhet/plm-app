import {Routes, Route} from "react-router-dom"
import ItemListContainer from "../../components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "../../components/itemDetailContainer/ItemDetailContainer"
import Cart from "../../components/cart/Cart"
const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}
export default Main