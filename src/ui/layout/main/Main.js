import {Routes, Route} from "react-router-dom"
import ItemListContainer from "../../components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "../../components/itemDetailContainer/ItemDetailContainer"
import Cart from "../../components/cart/Cart"
import Checkout from "../../components/checkout/Checkout"
const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    )
}
export default Main