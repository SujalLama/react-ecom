import { Link } from "react-router-dom";
import CartButton from "./CartButton";

export interface CardProps {
    id: number;
    title: string;
    images: string[];
    rating: number;
    price: number;
    discountPercentage?: number;
    description: string;
    brand: string;
    stock: number;
}


export default function Card ({data}: {data: CardProps}) {
    const {title, images, rating, price, id} = data;

    const ratingStars = Array(5).fill(1).map((_, i) => {
                            if((i + 1) <= rating) {
                                return (
                                    <svg key={Date.now() + i + rating} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                )
                            }

                            return (
                                <svg key={Date.now() + i + rating} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                            )
                        });

    return (
    <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/products/${id}`}>
                <img className="rounded-t-lg p-8" src={images[images.length - 1]} alt={title} />
            </Link>
                <div className="px-5 pb-5">
                    <Link to={`/products/${id}`}>
                        <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{title}</h3>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                        {
                         ratingStars
                        }
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <CartButton product={data} />
                    </div>
                </div>
        </div>
    </div>
    )
}