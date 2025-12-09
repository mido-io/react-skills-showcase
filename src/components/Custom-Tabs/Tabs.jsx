import React, { useState } from 'react'

const tabsData = [
    {
        label: "Overview",
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Product Overview</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    This is a demonstration of a reusable tab component. It supports switching between different content panels while maintaining state.
                </p>
            </div>
        ),
    },
    {
        label: "Features",
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Responsive design</li>
                    <li>Accessible keyboard navigation</li>
                    <li>Smooth transitions</li>
                </ul>
            </div>
        ),
    },
    {
        label: "Settings",
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Configuration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Adjust your preferences here. (This is just a demo content panel).
                </p>
            </div>
        ),
    },
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="flex space-x-1 rounded-xl bg-gray-100 dark:bg-gray-800 p-1 mb-6">
                {tabsData.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`
                            w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                            transition-all duration-200
                            ${activeTab === index
                                ? 'bg-white dark:bg-gray-700 text-blue-700 dark:text-blue-100 shadow'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-blue-600 dark:hover:text-blue-300'
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm min-h-[200px]">
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    {tabsData[activeTab] && tabsData[activeTab].content}
                </div>
            </div>
        </div>
    )
}

export default Tabs
