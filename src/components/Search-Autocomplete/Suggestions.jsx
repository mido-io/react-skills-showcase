export default function Suggestions({ data, onSelect }) {
    return (
        <ul className="max-h-60 overflow-y-auto">
            {data.map((item, i) => (
                <li
                    key={i}
                    className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer transition-colors border-b border-gray-50 dark:border-gray-700/50 last:border-none"
                    onClick={() => onSelect(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}
