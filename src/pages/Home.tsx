import { useEffect, useState } from "react"
import { getProductsCategories} from "../api/products";
import Category from "../ components/Category";

export default function Home () {
    const [categories, setCategories] = useState<string[]>([]);
    
    // fetch Categories
    useEffect(() => {
        (async function () {
            const data = await getProductsCategories()
            if(data.status) {
                setCategories(data.categories.slice(0,2));
            }
        })()
    }, []);

    return <div>
        {
            categories.map(item => <Category key={item} title={item} />)
        }
    </div>
}