import Table from "../ components/Table";

export default function Orders () {
    return (
        <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
                <div className="max-w-full overflow-x-auto">
                    <Table />
                </div>
            </div>
        </div>
    )
}