import { Dispatch, SetStateAction } from "react";

export default function Pagination ({pages, setPage} : {pages: number, setPage: Dispatch<SetStateAction<number>>}) {

    const prevPage = () => {
        setPage(prev => {
            if(prev === 0) {
                return 0;
            }

            return prev - 1;
        })
    }

    const nextPage = () => {
        setPage(prev => {
            if(prev === (pages - 1)) {
                return prev;
            }

            return prev + 1;
        })
    }

    const currentPage = (pageNum : number) => {
        setPage(pageNum)
    }

    
    return (
    <div className="max-w-2xl mx-auto mt-16 mb-4">

        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
                <li className="hover:cursor-pointer" onClick={prevPage}>
                    <span
                        className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</span>
                </li>
                {
                    Array(pages).fill(1).map((_, i) => {
                        return (
                            <li key={Math.random() * Date.now()} className="hover:cursor-pointer" onClick={() => currentPage(i)}>
                                <span
                                    className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        {i + 1}
                                </span>
                            </li>
                        )
                    })
                }
                <li className="hover:cursor-pointer" onClick={nextPage}>
                    <span
                        className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</span>
                </li>
            </ul>
        </nav>
    </div>
    )
}