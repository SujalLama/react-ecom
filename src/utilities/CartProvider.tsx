import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";
import { AddedCart } from "../ components/CartButton";


export interface Cart {
    userId: number;
    products: AddedCart[];
    total: number;
} 

const initialCart: Cart  = {
    userId: 0,
    products: [],
    total: 0
}

export interface CartContextType {
    cart: Cart;
    setCart: Dispatch<SetStateAction<Cart>>
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider ({children} : PropsWithChildren){
    const [cart, setCart] = useState(initialCart);

    const value = {
        cart,
        setCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}