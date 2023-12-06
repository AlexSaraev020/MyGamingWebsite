import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home from "../images/home.png";

export const Nav = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Verifică dacă modul întunecat este activat la încărcarea paginii
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(isDarkMode);

        // Aplică clasa 'dark' la 'body' dacă modul întunecat este activat
        if (isDarkMode) {
            document.body.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const updatedMode = !darkMode;
        setDarkMode(updatedMode);
        // Salvează starea modului întunecat în localStorage
        localStorage.setItem("darkMode", updatedMode);

        // Adaugă sau elimină clasa 'dark' la 'body' în funcție de starea modului întunecat
        document.body.classList.toggle("dark", updatedMode);
    };

    return (
        <header className="flex justify-center items-center mb-5">
            <nav className="bg-inherit w-11/12 flex justify-between dark:border-b-4 dark:border-cyan-500">
                <Link to="/">
                    <button className="mt-5 mb-5 transition ease-in-out delay-150 hover:-translate-y-1">
                        <img className="w-8 h-6 sm:w-10 sm:h-8 md:w-12 md:h-10 lg:w-12 lg:h-10" src={home} alt="home" />
                    </button>
                </Link>

                <button className="mt-3 mb-3" onClick={toggleDarkMode}>
                    <img className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-14 dark:hidden mt-2 transition ease-in-out delay-150 hover:-translate-y-1" src="https://www.svgrepo.com/show/78390/sun.svg" alt="sun" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-14 hidden dark:block transition ease-in-out delay-150 hover:-translate-y-1" src="https://www.svgrepo.com/show/276649/half-moon-moon.svg" alt="moon" />
                </button>
                <div className="w-12"></div>
            </nav>
        </header>
    );
};
