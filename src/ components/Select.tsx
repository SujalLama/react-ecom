
interface SelectProps {
    options: (string | number)[]
}

export default function Select ({options} : SelectProps) {
    return <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
        {
            options.map((option) => {
                return <option key={option} value={option}>{option}</option>
            })
        }
    </select>
}