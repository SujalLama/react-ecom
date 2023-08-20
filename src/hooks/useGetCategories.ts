import { useEffect, useState } from "react";
import { getProductsCategories } from "../api/products";

let categoriesList : string[] = [];
export default function useGetCategories () {
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | undefined>('');
    
    // fetch Categories
    useEffect(() => {
        (async function () {

            if(categoriesList.length > 0) {
                setCategories(categoriesList);
                return;
            }

            const data = await getProductsCategories();
            if(!data.status) {
                setLoading(false);
                setError(data.error);
                return;
            }
            categoriesList = data.categories;
            setCategories(data.categories);
            setLoading(false);
        })()
    }, []);

    return [loading, error, categories];

}