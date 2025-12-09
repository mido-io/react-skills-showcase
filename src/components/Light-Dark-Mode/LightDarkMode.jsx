import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { FaSun, FaMoon } from "react-icons/fa";
import "./theme.css";

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="light-dark-mode">
            <div className="text-center">
                <h1>Theme Switcher</h1>
                <p>Toggle between light and dark mode.</p>
            </div>

            <div className="theme-card">
                <p className="theme-info">
                    Current Theme: <span style={{ fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em" }}>{theme}</span>
                </p>

                <button
                    onClick={toggleTheme}
                    className={`theme-toggle-btn ${theme === "dark" ? "dark" : ""}`}
                >
                    <span className="theme-toggle-icon">
                        {theme === "dark" ? (
                            <FaMoon className="icon-moon" />
                        ) : (
                            <FaSun className="icon-sun" />
                        )}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default LightDarkMode;
