import { Outlet } from "react-router-dom"
import Sidebar from "../ components/Sidebar"


export default function Dashboard () {
    return (
        <div className="flex h-screen py-4 px-2 lg:mx-4 xl:mx-12">
            <div className="w-[20%] space-y-6 md:space-y-10 mt-10">
                <Sidebar />
            </div>
            <div className="w-[80%] bg-gray-200 p-8">
                <Outlet />
            </div>
        </div>
    )
}