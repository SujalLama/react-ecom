import { useContext } from "react"
import { CartContext, CartContextType } from "../utilities/CartProvider"


export default function useCart () {
    const {cart, setCart} = useContext(CartContext) as CartContextType;

    return {cart, setCart}
}