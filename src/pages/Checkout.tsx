import Button from "../ components/Button";
import PaymentDetail from "../ components/PaymentDetail";
import PaymentOption from "../ components/PaymentOption";
import ShippingAddress from "../ components/ShippingAddress";
import useCart from "../hooks/useCart";

export default function Checkout () {
    const {cart} = useCart();
    return (
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
            <div className="w-full">
                <div className="-mx-3 md:flex items-start">
                    <div className="px-3 md:w-7/12 lg:pr-10">
                        
                        {
                            cart.products.map(pro => {
                                return (
                                    <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                        <div className="w-full flex items-center">
                                            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                <img className="w-full h-full object-cover object-center" src={pro.image} alt={pro.title} />
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-semibold uppercase text-gray-600">{pro.title}</h6>
                                                <p className="text-gray-400">x {pro.quantity}</p>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-600 text-xl">${pro.quantity * pro.price}</span><span className="font-semibold text-gray-600 text-sm">.00</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <PaymentDetail checkout={false} />
                    </div>
                    <div className="px-3 md:w-5/12">
                        <ShippingAddress />
                        <PaymentOption />
                        <div>
                            <Button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                                Pay Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
