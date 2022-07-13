import { createContext, useState } from "react";

export const cartContext = createContext();

const Provider = cartContext.Provider;

const CartContext = ({children}) => {

    const [items, setItems] = useState([]);
    const [cantidad_total, setCantidadTotal] = useState(0);
    const [precio_total, setPrecioTotal] = useState(0);

    const addItem = (item, quantity) => {

        const newItem = {...item};
        const newItems = [...items];

        if(!isInCart(item.id)){

            newItem.quantity = quantity;
            newItem.subtotal = newItem.price * quantity;
            newItems.push(newItem);

            setItems(newItems);
            setCantidadTotal(cantidad_total + quantity);
            setPrecioTotal(precio_total + newItem.subtotal);
        }
        else{
            const itemIndex = items.findIndex(i => i.id === item.id);
            if(itemIndex>=0){

                const subtotal = newItem.price * quantity;

                setCantidadTotal(cantidad_total - newItems[itemIndex].quantity + quantity);
                setPrecioTotal(precio_total - newItems[itemIndex].subtotal + subtotal);
                newItems[itemIndex].quantity = quantity;
                newItems[itemIndex].subtotal = subtotal;
                setItems(newItems);
                
            }
        }

    };

    const removeItem = (itemId) => {
        const itemIndex = items.findIndex(item => item.id === itemId);
        if(itemIndex>=0){
            setCantidadTotal(cantidad_total - items[itemIndex].quantity);
            setPrecioTotal(precio_total - items[itemIndex].subtotal);
            setItems(items.filter(item => item.id !== itemId));
        }            
    };    

    const clear = () => {
        setCantidadTotal(0);
        setPrecioTotal(0);
        setItems([]);        
    };   
    
    const isInCart = (itemId) => {
        const itemsFilter = items.filter(item => item.id === itemId);
        return itemsFilter.length > 0 ? true : false;
    };
    
    const getSelectedCount = (itemId) => {
        if(items.length>0){
            const itemsFilter = items.filter(item => item.id === itemId);
            return itemsFilter.length===1 ? itemsFilter[0].quantity : 1;
        }
        else{
            return 1;
        }
    };

    const contextValue = {
        items: items,
        cantidad_total: cantidad_total,
        precio_total: precio_total,
        addItem: addItem,
        removeItem: removeItem,
        clear: clear,
        isInCart: isInCart,
        getSelectedCount: getSelectedCount
    };

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )

}

export default CartContext;