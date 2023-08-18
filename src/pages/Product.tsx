import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductDetail } from "../api/products";
import { CardProps } from "../ components/Card";
import Select from "../ components/Select";
import CartButton from "../ components/CartButton";

export default function Product () {
    const {productId = ''} = useParams();
    const [product, setProduct] = useState<CardProps | undefined>();
    
    useEffect(() => {
        (async function () {
            const data = await getProductDetail(parseInt(productId, 10));
            setProduct(data);
        })()
    }, [productId])

    if(product === undefined) {
        return null;
    }

    return (
    <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
             <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div>
                        <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
                                <img className="max-w-full" src={product.images[0]} alt={product.title} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.title}</h2>
                    <p className="text-gray-500 text-sm">By <a href="#" className="text-indigo-600 hover:underline">{product.brand}</a></p>

                    <div className="flex items-center space-x-4 my-4">
                    <div>
                        <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                        <span className="text-indigo-400 mr-1 mt-1">$</span>
                        <span className="font-bold text-indigo-600 text-3xl">{product.price}</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-green-500 text-xl font-semibold">Save {product.discountPercentage}%</p>
                        <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                    </div>
                    </div>

                    <p className="text-gray-500">{product.description}</p>

                    <div className="flex py-4 space-x-4">
                    <div className="relative">
                        <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                        <Select options={Array(product.stock).fill(1).map((_, i) => i + 1)} />
                        {/* <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg> */}
                    </div>
                    <CartButton product={product} />
                    </div>
                </div>
            </div>
      </div>
    </>
    )
}