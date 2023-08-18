import { useState } from "react";
import Input from "../ components/Input";
import useGetCategories from "../hooks/useGetCategories";
import CardList from "../ components/CardList";
import { strRemoveDash, strToCapitalize } from "../utilities/strUtility";

export default function Products() {
    const [loading, error, categories] = useGetCategories();
    const [activeCat, setActiveCat] = useState('all');
    const [search, setSearch] = useState('');

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }

    return (
        <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
            
            <Input 
                placeholder="Search"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
        
            <div className="lg:flex lg:-mx-2">
                <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                <button 
                    onClick={() => {
                        setActiveCat('all');
                        setSearch('');
                    }} 
                    className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">All</button>
                    {
                       (categories as []).map((catg) => {
                            return <button 
                                    key={catg} 
                                    onClick={() => {
                                       setActiveCat(catg);
                                       setSearch('');
                                    }} 
                                    className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">
                                        {strToCapitalize(strRemoveDash(catg))}
                                    </button>
                        })
                    }
                </div>

                <div className="lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <CardList title={activeCat} search={search} />
                </div>
            </div>
        </div>
    </section>
    )
}