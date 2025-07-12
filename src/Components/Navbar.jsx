import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { AppContext } from "../Context/AppContext"

const Navbar = () => {
    const { navigate } = useContext(AppContext)
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            {/* Logo */}
            <Link to="/">
                <span className="text-2xl font-bold tracking-wide text-primary">PAGETURNER</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <Link to={"/"}>Home</Link>
                <Link to={"/books"}>Books</Link>
                {/* Cart icon */}
                <div className="relative cursor-pointer">
                    <BsCart2 className="w-6 h-6" />
                    <button
                     onClick={() => navigate("/login")}
                    className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">3</button>
                </div>

                {/* Login button */}
                <button
                    onClick={() => navigate("/login")}
                    className="cursor-pointer px-8 py-2 bg-primary text-white rounded-full"
                >
                    Login
                </button>
            </div>

            {/* Mobile menu toggle button */}
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <Link to={"/"}>Home</Link>
                <Link to={"/books"}>Books</Link>
                <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Login
                </button>
            </div>

        </nav>
    );
};

export default Navbar;
