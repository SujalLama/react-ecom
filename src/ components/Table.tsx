export default function Table () {
    return (
        <table className="table-auto w-full">
            <thead>
                <tr className="bg-blue-500 text-center">
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">
                    S.N.
                    </th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">
                    Order Id
                    </th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">
                    Delivery Status
                    </th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">
                    Payment Status
                    </th>
                    <th
                    className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4"
                    >
                    Order Details
                    </th>
                    <th
                    className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent"
                    >
                    Register
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                    .com
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                    1 Year
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]">
                    $75.00
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                    $5.00
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]"
                    >
                    $10.00
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8]">
                    <a
                        href="javascript:void(0)"
                        className="border border-primary py-2 px-6 text-primary inline-block rounded hover:bg-primary hover:text-white">
                    Sign Up
                    </a>
                    </td>
                </tr>
                <tr>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                    .com
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                    1 Year
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]"
                    >
                    $75.00
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                    $5.00
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]"
                    >
                    $10.00
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8]">
                    <a
                        href="javascript:void(0)"
                        className="border border-primary py-2 px-6 text-primary inline-block rounded hover:bg-primary hover:text-white">
                    Sign Up
                    </a>
                    </td>
                </tr>
                <tr>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                    .com
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                    1 Year
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]"
                    >
                    $75.00
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                    $5.00
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]"
                    >
                    $10.00
                    </td>
                    <td
                    className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8]">
                    <a
                        href="javascript:void(0)"
                        className="border border-primary py-2 px-6 text-primary inline-block rounded hover:bg-primary hover:text-white">
                    Sign Up
                    </a>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}