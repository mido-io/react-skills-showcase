import React, { useState } from 'react'
import { FaMinus, FaPlus, FaFolder, FaFolderOpen, FaFile } from 'react-icons/fa'

const MenuItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false)
    const hasChildren = item && item.children && item.children.length > 0;

    return (
        <li className="my-1.5">
            <div
                className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-700 dark:text-gray-300"
                onClick={() => hasChildren && setExpanded(!expanded)}
            >
                <span className="text-sm text-gray-400">
                    {hasChildren ? (
                        expanded ? <FaMinus size={10} /> : <FaPlus size={10} />
                    ) : (
                        <span className="w-[10px]"></span>
                    )}
                </span>

                <span className="text-blue-500 dark:text-blue-400">
                    {hasChildren ? (expanded ? <FaFolderOpen /> : <FaFolder />) : <FaFile className="text-gray-400" />}
                </span>

                <span className="font-medium select-none">{item.label}</span>
            </div>

            {hasChildren && expanded && (
                <ul className="pl-6 border-l border-gray-200 dark:border-gray-700 ml-3 mt-1 animate-in slide-in-from-top-2 duration-200">
                    {item.children.map((child, index) => (
                        <MenuItem key={index} item={child} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default MenuItem
