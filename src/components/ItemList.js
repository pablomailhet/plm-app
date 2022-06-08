import Item from "./Item";
const ItemList = ({items}) => {
    return (
        <>
            {
                items.map((item,index) =>{
                    return <Item key={index} item={item} onAdd={()=>{}} />
                })
            }            
        </>
    )
}
export default ItemList