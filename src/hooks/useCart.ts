import { useContext, useEffect } from "react"
import { CartContext, CartContextType } from "../utilities/CartProvider"
import { retrieveFromLocalStorage} from "../utilities/tokenManage";


export default function useCart () {
    const {cart, setCart} = useContext(CartContext) as CartContextType;

    useEffect(() => {
        if(retrieveFromLocalStorage('cart').products.length > 0) {
            setCart(retrieveFromLocalStorage('cart'))
        }
    }, [setCart])

    return {cart, setCart}
}