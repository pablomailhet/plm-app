import { useContext } from "react";
import { cartContext } from "../../../api/context/CartContext";
import {Link} from "react-router-dom";
const CartWidget = () => {

    const objCartContext = useContext(cartContext);

    return (
        <Link to={"/cart"}>
            <span className="material-symbols-outlined text-success">
                    shopping_cart{objCartContext.cantidad_total>0 ? objCartContext.cantidad_total : null}
            </span>
        </Link>
    );
};
export default CartWidget;