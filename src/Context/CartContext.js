import { createContext, useState} from 'react';
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const newCartList = [...cartList];

    // Función para verificar si un item está en el carrito
    function isItemInCart(id){
        return cartList.some((itemInCart) => itemInCart.id === id);
    }

    const addToCart = (item, cantidadFromContador) => {  
        if (isItemInCart(item.id)) {
            // Si el item ya está en el carrito, actualizar su cantidad
            const itemIndex = cartList.findIndex((itemInCart) => itemInCart.id === item.id);
            newCartList[itemIndex].cantidad += cantidadFromContador;

        } else {
            //implementa la funcionalidad para agregar un producto al carrito
            newCartList.push({...item, cantidad: cantidadFromContador});
        }

        setCartList(newCartList);
    };

    const deleteItem = (id) => {
        //implementa la funcionalidad para borrar un producto del carrito
        setCartList(cartList.filter((item) => item.id !== id));
    }

    const limpiarCarrito = () => {	
        //implementa la funcionalidad para dejar el carrito vacío
        setCartList([]);
    }
 
    function cantidadCarrito(id){
        const item = cartList.find((itemInCart) => itemInCart.id === id);
        return item !== undefined ? item.cantidad: 0;
    }

    function getPriceItem(itemEspecifico){
        //cantidad * precio
        const itemIndividual = cartList.find((item) => item.id === itemEspecifico.id);
        const precioItem = itemIndividual.cantidad * itemIndividual.price;
        return precioItem;
    }

    function calcularTotalPrecio(){
        let total = 0;
        cartList.forEach((producto) => {
            total += producto.price * producto.cantidad;
        });
        return total;
    }

    function numerosWidget (){
        let itemCount = 0;

        cartList.forEach((producto) =>{
            let numCart = cantidadCarrito(producto.id);

            itemCount += numCart;
        })
        return itemCount;
}

   

    return (
        <CartContext.Provider  
            value={{
                cartList,
                addToCart,
                limpiarCarrito,
                deleteItem,
                isItemInCart,
                cantidadCarrito,
                calcularTotalPrecio,
                getPriceItem,
                numerosWidget
            }}
        >
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;
