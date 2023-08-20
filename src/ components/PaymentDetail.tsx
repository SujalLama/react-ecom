import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function PaymentDetail ({checkout = true} : {checkout ?: boolean}) {
    const {cart} = useCart();

    const shippingCost = 4.99;
    const vat = cart.total * (13 / 100);
    const totalSum = cart.total + shippingCost + vat;
    return (
        // <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-6 rounded-lg border p-6 shadow-md text-gray-800 bg-white">
            <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${cart.total}</p>
            </div>
            <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Vat(13%)</p>
            <p className="text-gray-700">${vat.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">${shippingCost}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
                <p className="mb-1 text-lg font-bold">${totalSum.toFixed(2)}</p>
                <p className="text-sm text-gray-700">including VAT</p>
            </div>
            </div>
            {
                checkout && (
                    <Link to="/checkout" state={{backLink: '/login'}} className="mt-6 w-full flex items-center justify-center rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                        Check out
                    </Link>
                )
            }
            
        </div>
    )
}