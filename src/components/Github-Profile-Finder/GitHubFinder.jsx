import React, { useState, useEffect } from 'react'
import User from "./User";
import { FaSearch, FaGithub } from 'react-icons/fa';

const GitHubFinder = () => {
    const [userName, setUserName] = useState("mido-io");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchUser() {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch(`https://api.github.com/users/${userName}`)
            const data = await response.json();
            if (data.message === "Not Found") {
                throw new Error("User not found");
            }
            setUserData(data)
        } catch (e) {
            setError(e.message)
            setUserData(null)
        } finally {
            setLoading(false)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (userName.trim()) fetchUser()
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div className="w-full max-w-xl mx-auto space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
                    <FaGithub /> GitHub Finder
                </h1>
                <p className="text-gray-500 dark:text-gray-400">Search for GitHub users and view their profile stats.</p>
            </div>

            <form onSubmit={handleSubmit} className="relative flex items-center">
                <FaSearch className="absolute left-4 text-gray-400" />
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Search GitHub username..."
                    className="w-full pl-12 pr-24 py-4 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                />
                <button
                    type="submit"
                    className="absolute right-2 px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                    Search
                </button>
            </form>

            {loading && (
                <div className="flex justify-center py-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                </div>
            )}

            {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-center">
                    {error}
                </div>
            )}

            {userData && !loading && !error && <User user={userData} />}
        </div>
    )
}

export default GitHubFinder
