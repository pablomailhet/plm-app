import { createContext, useState } from "react";

export const cartContext = createContext();

const Provider = cartContext.Provider;

const CartContext = ({children}) => {

    const [items, setItems] = useState([]);
    const [cantidad_total, setCantidadTotal] = useState(0);
    const [precio_total, setPrecioTotal] = useState(0);

    const addItem = (item, quantity) => {

        if(!isInCart(item.id)){

            //Guardo en el item la cantidad seleccionada para el caso de querer modificar
            //me traiga precargado la cantidad anterior.
            //item.quantity = quantity;

            const copiaItem = {...item};
            const copiaItems = [...items];

            copiaItem.quantity = quantity;
            copiaItem.subtotal = copiaItem.price * quantity;
            copiaItems.push(copiaItem);

            setItems(copiaItems);
            setCantidadTotal(cantidad_total + quantity);
            setPrecioTotal(precio_total + copiaItem.subtotal);
        }
        else{
            const itemIndex = items.findIndex(i => i.id == item.id);
            if(itemIndex>=0){

                //Guardo en el item la cantidad seleccionada para el caso de querer modificar
                //me traiga precargado la cantidad anterior.
                //item.quantity = quantity;

                const copiaItem = {...item};
                const copiaItems = [...items];
                const subtotal = copiaItem.price * quantity;

                setCantidadTotal(cantidad_total - copiaItems[itemIndex].quantity + quantity);
                setPrecioTotal(precio_total - copiaItems[itemIndex].subtotal + subtotal);
                copiaItems[itemIndex].quantity = quantity;
                copiaItems[itemIndex].subtotal = subtotal;
                setItems(copiaItems);
                
            }
        }

    };

    const removeItem = (itemId) => {
        const itemIndex = items.findIndex(item => item.id == itemId);
        if(itemIndex>=0){
            setCantidadTotal(cantidad_total - items[itemIndex].quantity);
            setPrecioTotal(precio_total - items[itemIndex].subtotal);
            setItems(items.filter(item => item.id != itemId));
        }            
    };    

    const clear = () => {
        setCantidadTotal(0);
        setPrecioTotal(0);
        setItems([]);        
    };   
    
    const isInCart = (itemId) => {
        const itemsFilter = items.filter(item => item.id == itemId);
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