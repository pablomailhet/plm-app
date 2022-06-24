import { useContext } from "react";
import { cartContext } from "../../../api/context/CartContext";
import {Link} from "react-router-dom";
const CartWidget = () => {

    const objCartContext = useContext(cartContext);

    return (
        <Link to={"/cart"}>
            <span className="material-symbols-outlined text-success">
                {objCartContext.cantidad_total>0 ? "shopping_cart" + objCartContext.cantidad_total : ''}
            </span>
        </Link>
    );
};
export default CartWidget;