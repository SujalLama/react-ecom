import Category from "../ components/Category";
import useGetCategories from "../hooks/useGetCategories";

export default function Home () {
    const [loading, error, categories] = useGetCategories();

    if(loading) {
        return <div>Loading...</div>
    }
    
    return <div>
        {
            error ? <div>{error}</div> : categories.map(item => <Category key={item} title={item} />)
        }
    </div>
}