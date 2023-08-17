import { useEffect, useState } from "react";
import { getProductsCategories } from "../api/products";


export default function useGetCategories () {
    const [categories, setCategories] = useState<string[] | undefined>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | undefined>('');
    
    // fetch Categories
    useEffect(() => {
        (async function () {
            const data = await getProductsCategories();

            if(!data.status) {
                setLoading(false);
                setError(data.error);
                return;
            }
            
            setCategories(data.categories);
            setLoading(false);
        })()
    }, []);

    return [loading, error, categories];

}