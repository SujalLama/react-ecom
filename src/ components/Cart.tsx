import { useState } from "react";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

export default function Cart () {
    const {cart, setCart} = useCart();
    const [open, setOpen] = useState(false);

    
    function removeFromCart (id: number) {
        const removedItemPrice = cart.products.filter(product => product.id === id)[0].price;

        const newCartProducts = cart.products.filter(product => product.id !== id);
        setCart(prevCart => {
            return {
                ...prevCart, products: newCartProducts, total: prevCart.total - removedItemPrice
            }
        })
    }

    return (
        <div
            className="relative block w-6 lg:inline-block text-md font-bold  text-orange-500  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                <button className="relative" onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart w-6 h-6 mt-2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {cart.products.length > 0 && <span className="-top-2 -right-6 absolute flex items-center justify-center rounded-full w-6 h-6 bg-red-500 text-white text-xs">{cart.products.length}</span>}
                </button>
                {
                    (open && cart.products.length > 0) && (
                        <div className="absolute w-full bg-white  rounded-b border-t-0 z-10">
                            <div className="shadow-xl w-64">
                                {
                                    cart.products.map(cart => {
                                        return (
                                            <div key={cart.id} className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                                                <div className="p-2 w-12">
                                                    <img src={cart.image} alt={cart.title} />
                                                </div>
                                                <Link to={`/products/${cart.id}`} className="flex-auto text-sm w-32">
                                                    <div className="font-bold">{cart.title}</div>
                                                    <div className="truncate">{cart.description}</div>
                                                    <div className="text-gray-400">Qt: {cart.quantity}</div>
                                                </Link>
                                                <div className="flex flex-col w-18 font-medium items-end">
                                                    <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700" onClick={() => removeFromCart(cart.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg>
                                                    </div>
                                                    ${cart.price}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="p-4 justify-center flex bg-white">
                                    <button 
                                    className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center mx-4 my-2 rounded font-bold cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition">
                                        Checkout ${cart.total}
                                    </button>
                                    <Link to="/cart" 
                                    className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center mx-4 my-2 rounded font-bold cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition">
                                        Go to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
        </div>
    )
}