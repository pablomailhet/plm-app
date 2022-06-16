import {Routes, Route} from "react-router-dom"
import ItemListContainer from "../../components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "../../components/itemDetailContainer/ItemDetailContainer"
const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
    )
}
export default Main