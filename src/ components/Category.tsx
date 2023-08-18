import { useEffect, useState } from "react"
import Card, { CardProps } from "./Card";
import { getProductsOfCategory } from "../api/products";

export default function Category ({title} : {title: string}) {
    const [products, setProducts] = useState([]);

    // fetch products based on Category
    useEffect(() => {
    
        (async function () {
            const data = await getProductsOfCategory(title);
            setProducts(data.products)
        })()
            
    }, [title])

    
    return (
        <div className="py-4 px-2 lg:mx-4 xl:mx-12">
            <h2 className="text-3xl my-4 font-bold">{title.toUpperCase()}</h2>
            <div className="flex gap-8">
                {
                    products.map((item : CardProps) => {
                        return <Card key={item.id} data={item}/>
                    })
                }
            </div>
        </div>
    )
}