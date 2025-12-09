import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import { FaSearch } from "react-icons/fa";

export default function SearchAutocomplete() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [allUsers, setAllUsers] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [query, setQuery] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        async function loadUsers() {
            setLoading(true);
            try {
                const res = await fetch("https://dummyjson.com/users");
                const data = await res.json();
                const names = data.users.map((u) => u.firstName);
                setAllUsers(names);
            } catch (err) {
                setError("Failed to load users");
            } finally {
                setLoading(false);
            }
        }
        loadUsers();
    }, []);

    function handleSearch(e) {
        const value = e.target.value.toLowerCase();
        setQuery(value);

        if (value.length < 2) {
            setShow(false);
            setFiltered([]);
            return;
        }

        const matches = allUsers.filter((name) =>
            name.toLowerCase().includes(value)
        );

        setFiltered(matches);
        setShow(matches.length > 0);
    }

    function handleSelect(name) {
        setQuery(name);
        setShow(false);
    }

    return (
        <div className="w-full max-w-md mx-auto space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Autocomplete</h1>
                <p className="text-gray-500 dark:text-gray-400">Start typing to search for users.</p>
            </div>

            <div className="relative">
                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Type a name..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                    />
                    {loading && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                        </div>
                    )}
                </div>

                {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

                {show && (
                    <div className="absolute w-full z-10 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <Suggestions data={filtered} onSelect={handleSelect} />
                    </div>
                )}
            </div>
        </div>
    );
}
