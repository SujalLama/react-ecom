import { FormEvent, useState } from "react";
import { AddedCart } from "./CartButton";
import useCart from "../hooks/useCart";
import { storeAtLocalStorage } from "../utilities/tokenManage";


export default function CartInput ({product}: {product: AddedCart}) {
    const [proQty, setProQty] = useState(product.quantity);
    const {setCart} = useCart();
    const maxQty = 10;

    function removeItem () {
        setProQty(qty => qty - 1)
        increaseProdQty(proQty - 1)
    }

    function addItem () {
        setProQty(qty => qty + 1)
        increaseProdQty(proQty + 1)
    }


    function increaseProdQty (qty : number) {
        setCart(prevCart => {
            const newProducts = prevCart.products.map(prod => {
                if(product.id === prod.id) {
                    return {...prod, quantity: qty}
                }
                return prod;
            });

            let otherTotalPrice = 0;

            const newProductPrice = prevCart.products.filter(prod => prod.id === product.id)[0].price * qty;
            prevCart.products.filter(prod => prod.id !== product.id).map(item => {
                otherTotalPrice += item.price 
                return item
            });

            const total = newProductPrice + otherTotalPrice;

            const newCart = {...prevCart, products: newProducts, total};
            storeAtLocalStorage('cart', JSON.stringify(newCart));
            return newCart
        })
    }

    function changeHandler (e : FormEvent<HTMLInputElement>) {
        const num = parseInt(e.currentTarget.value);
        setProQty(num)
        increaseProdQty(num)
    }

    return (
        <div className="flex items-center border-gray-100">
            <button
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" 
                onClick={removeItem} disabled={proQty === 1}> - </button>
            <input 
                className="h-8 w-8 border bg-white text-center text-xs outline-none" 
                type="number" 
                value={proQty} 
                onChange={changeHandler} 
                min="1" />
            <button 
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" 
                onClick={addItem} disabled={proQty === maxQty}> + </button>
        </div>
    )
}