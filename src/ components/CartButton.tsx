import { useState } from "react";
import Button from "./Button";
import useCart from "../hooks/useCart";
import { CardProps } from "./Card";
import { storeAtLocalStorage } from "../utilities/tokenManage";

export interface AddedCart {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    quantity: number;
}

export default function CartButton ({product} : {product: CardProps}) {
    const [cartAdded, setCartAdded] = useState(false);
    const {id, price, description, title, images} = product;

    const {cart, setCart} = useCart();

    function addToCart (addCart: AddedCart) {
        setCartAdded(true);
        setCart((prevCart) => {

            const newCart = {...prevCart, 
                products: [...prevCart.products, addCart], 
                total: prevCart.total + addCart.price};
                
            storeAtLocalStorage('cart', JSON.stringify(newCart));

            return newCart;
        })
    }

    return (
    <Button 
        disabled={cartAdded || cart.products.filter(product => product.id === id).length > 0} 
        onClick={() => addToCart({id, price, description, title, image: images[images.length - 1], quantity: 1})}
        className="text-white bg-blue-700 disabled:bg-gray-400 disabled:hover:cursor-not-allowed disabled:hover:bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {(cartAdded || cart.products.filter(product => product.id === id).length > 0) ? 'Added to cart': 'Add to cart'}
    </Button>
    )
}