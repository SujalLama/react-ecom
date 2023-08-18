import { useEffect, useState } from "react"
import Card, { CardProps } from "./Card";
import { getProducts, getProductsOfCategory, getSearchedProducts } from "../api/products";
import Pagination from "./Pagination";

export default function CardList ({title, search} : {title: string, search: string}) {
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(0);
    const limit = 10;

    // fetch products based on Category
    useEffect(() => {
    
        (async function () {
            if(title === 'all' && !search) {
                const data = await getProducts(limit, page * limit);
                setProducts(data.products);
                setPages(Math.floor(data.total / limit));
                return;
            }

            if(search) {
                const data = await getSearchedProducts(search);
                setProducts(data.products);
                setPages(0);
                return;
            }

            const data = await getProductsOfCategory(title);
            setPages(Math.floor(data.total / limit));
            setProducts(data.products)
        })()
            
    }, [title, page, search])

    
    return (
        <>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                products.map((item : CardProps) => {
                    return <Card key={item.id} data={item}/>
                })
            }
        </div>
        {pages && <Pagination pages={pages} setPage={setPage} />}
        </>
    )
}