import React, { useState, useEffect } from 'react'
import { FaArrowsAltV } from "react-icons/fa";

const ScrollIndicator = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const URL = "https://dummyjson.com/products"

    async function fetchData(URL) {
        try {
            setLoading(true);
            const response = await fetch(URL);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
            }
        } catch (e) {
            console.log(e);
            setErrorMessage(e.message);
        } finally {
            setLoading(false);
        }
    }

    const handleScrollPercentage = () => {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        fetchData(URL);
    }, [URL])

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage)
        return () => {
            window.removeEventListener("scroll", () => { });
        }
    }, []);

    if (errorMessage) {
        return (
            <div className="flex items-center justify-center h-64 text-red-500">
                Error: {errorMessage}
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64 text-blue-500 animate-pulse">
                Loading data...
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto relative">
            <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
                <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-150 ease-out"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </div>

            <div className="text-center mb-8 mt-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3 mb-2">
                    <FaArrowsAltV className="text-blue-600" />
                    Scroll Indicator
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Scroll down to see the progress bar at the top of the screen.
                </p>
            </div>

            <div className="space-y-4">
                {data && data.length > 0
                    ? data.map((dataItem) => (
                        <div key={dataItem.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="font-medium text-gray-800 dark:text-gray-200">{dataItem.title}</h3>
                        </div>
                    ))
                    : null}
            </div>
        </div>
    )
}

export default ScrollIndicator
