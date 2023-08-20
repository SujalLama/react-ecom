import useCart from "../hooks/useCart"
import CartInput from "../ components/CartInput";
import PaymentDetail from "../ components/PaymentDetail";

export default function CartPage() {
    const {cart, setCart} = useCart();

    function removeFromCart (id: number) {
        const removedItemPrice = cart.products.filter(product => product.id === id)[0].price;

        const newCartProducts = cart.products.filter(product => product.id !== id);
        setCart(prevCart => {
            return {
                ...prevCart, products: newCartProducts, total: prevCart.total - removedItemPrice
            }
        })
    }

    if(cart.products.length === 0) {
        return <div className="h-screen bg-gray-100 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">No Cart Items</h1>
        </div>
    }

    return (
    <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
                {
                    cart.products.map(product => {
                        return (
                            <div key={product.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={product.image} alt={product.title} className="w-full rounded-lg sm:w-40" />
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
                                        <p className="mt-1 text-xs text-gray-700">{product.description}</p>
                                    </div>
                                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <CartInput product={product} />
                                        <div className="flex items-center space-x-4">
                                            <p className="text-sm">${product.price}</p>
                                            <svg onClick={() => removeFromCart(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        {/* <!-- Sub total --> */}
        <div className="md:w-1/3">
            <PaymentDetail />
            </div>
        </div>
    </div>
    )
}

