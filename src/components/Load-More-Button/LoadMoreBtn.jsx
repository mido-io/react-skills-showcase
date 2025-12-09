import React, { useState, useEffect } from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa';

const LoadMoreBtn = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [skip, setSkip] = useState(0)
    const [disableButton, setDisableButton] = useState(false);

    async function getData() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`)
            const result = await response.json()

            if (result && result.products && result.products.length) {
                setData((prevData) => [...prevData, ...result.products]);
                setLoading(false);
            }

        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [skip]);

    useEffect(() => {
        if (data && data.length === 100) setDisableButton(true);
    }, [data]);

    if (error) return <div className="text-red-500 text-center">Error: {error.message}</div>

    return (
        <div className="w-full space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Gallery</h1>
                <p className="text-gray-500 dark:text-gray-400">Load more data dynamically.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((item) => (
                    <div
                        key={`${item.id}-${Math.random()}`} // unique key fallback
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white truncate" title={item.title}>
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                ${item.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center pb-8">
                <button
                    disabled={disableButton || loading}
                    onClick={() => setSkip(prev => prev + 20)}
                    className={`
                        flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300
                        ${disableButton
                            ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed text-gray-500"
                            : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:scale-105"
                        }
                    `}
                >
                    {loading ? (
                        <>Loading...</>
                    ) : (
                        <>
                            <FaCloudDownloadAlt />
                            {disableButton ? "No More Products" : "Load More Products"}
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}

export default LoadMoreBtn
