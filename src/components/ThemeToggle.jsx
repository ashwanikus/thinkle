import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            style={{
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "var(--primary-color)",
                color: "var(--text-color)",
                border: "none",
                cursor: "pointer"
            }}
        >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
};

export default ThemeToggle;
