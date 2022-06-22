import { createContext, useState } from "react";

export const cartContext = createContext();

const Provider = cartContext.Provider;

const CartContext = ({children}) => {

    const [items, setItems] = useState([]);
    const [cantidad_total, setCantidadTotal] = useState(0);
    const [precio_total, setPrecioTotal] = useState(0);

    const addItem = (item, quantity) => {

        if(!isInCart(item.id)){
            item.quantity = quantity;
            item.subtotal = item.price * quantity;
            items.push(item);
            setItems(items);
            setCantidadTotal(cantidad_total + quantity);
            setPrecioTotal(precio_total + item.subtotal);
        }
        else{
            let itemIndex = items.findIndex(i => i.id == item.id);
            if(itemIndex>=0){
                let subtotal = item.price * quantity;
                setCantidadTotal(cantidad_total - items[itemIndex].quantity + quantity);
                setPrecioTotal(precio_total - items[itemIndex].subtotal + subtotal);
                items[itemIndex].quantity = quantity;
                items[itemIndex].subtotal = subtotal;
                setItems(items);
            }
        }

    };

    const removeItem = (itemId) => {
        if(itemId>0){
            let itemIndex = items.findIndex(item => item.id == itemId);
            if(itemIndex>=0){
                setCantidadTotal(cantidad_total - items[itemIndex].quantity);
                setPrecioTotal(precio_total - items[itemIndex].subtotal);
                setItems(items.filter(item => item.id != itemId));
            }            
        }
    };    

    const clear = () => {
        setCantidadTotal(0);
        setPrecioTotal(0);
        setItems([]);        
    };   
    
    const isInCart = (itemId) => {
        let itemsFilter = items.filter(item => item.id == itemId);
        return itemsFilter.length > 0 ? true : false;
    };   

    const contextValue = {
        items: items,
        cantidad_total: cantidad_total,
        precio_total: precio_total,
        addItem: addItem,
        removeItem: removeItem,
        clear: clear,
        isInCart: isInCart
    };

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )

}

export default CartContext;